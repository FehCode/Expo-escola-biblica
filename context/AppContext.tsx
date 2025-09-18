import React, { createContext, useState, useCallback, useEffect, useContext, ReactNode } from 'react';
import { Course, Progress, Page, Lesson } from '../types';
import { COURSES } from '../constants';
import { generateCertificatePdf } from '../services/pdfService';

interface AppContextType {
    progress: Progress;
    currentPage: Page;
    activeCourse: Course | null;
    activeLesson: Lesson | null;
    handleNavigate: (page: Page) => void;
    handleSelectCourse: (courseId: string) => void;
    handleSelectLesson: (lessonId: string) => void;
    handleCompleteLesson: (courseId: string, lessonId: string) => void;
    handleSubmitQuiz: (courseId: string, score: number) => boolean;
    handleGenerateCertificate: (course: Course, studentName: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [progress, setProgress] = useState<Progress>(() => {
        try {
            const savedProgress = localStorage.getItem('lmsProgress');
            return savedProgress ? JSON.parse(savedProgress) : {};
        } catch (error) {
            console.error("Failed to parse progress from localStorage", error);
            return {};
        }
    });

    const [currentPage, setCurrentPage] = useState<Page>('dashboard'); // Default to dashboard
    const [activeCourseId, setActiveCourseId] = useState<string | null>(null);
    const [activeLessonId, setActiveLessonId] = useState<string | null>(null);

    useEffect(() => {
        try {
            localStorage.setItem('lmsProgress', JSON.stringify(progress));
        } catch (error) {
            console.error("Failed to save progress to localStorage", error);
        }
    }, [progress]);

    const handleNavigate = (page: Page) => {
        setCurrentPage(page);
        if (page !== 'detail') {
            setActiveCourseId(null);
            setActiveLessonId(null);
        }
    };
    
    const handleSelectCourse = useCallback((courseId: string) => {
        const course = COURSES.find(c => c.id === courseId);
        if (course) {
            const lastLessonId = progress[courseId]?.lastLesson;
            const lessonToOpen = course.lessons.find(l => l.id === lastLessonId) || course.lessons[0];
            setActiveLessonId(lessonToOpen.id);
            setActiveCourseId(courseId);
            setCurrentPage('detail');
        }
    }, [progress]);

    const handleSelectLesson = useCallback((lessonId: string) => {
        setActiveLessonId(lessonId);
        if (activeCourseId) {
            setProgress(prev => ({
                ...prev,
                [activeCourseId]: {
                    ...(prev[activeCourseId] || { completedLessons: [], quizScore: null }),
                    lastLesson: lessonId,
                }
            }));
        }
    }, [activeCourseId]);

    const handleCompleteLesson = useCallback((courseId: string, lessonId: string) => {
        setProgress(prev => {
            const courseProgress = prev[courseId] || { completedLessons: [], quizScore: null };
            if (!courseProgress.completedLessons.includes(lessonId)) {
                return {
                    ...prev,
                    [courseId]: {
                        ...courseProgress,
                        completedLessons: [...courseProgress.completedLessons, lessonId]
                    }
                };
            }
            return prev;
        });
    }, []);

    const handleSubmitQuiz = useCallback((courseId: string, score: number) => {
        const approvalThreshold = 0.7;
        const passed = score >= approvalThreshold;
        const quizLesson = COURSES.find(c => c.id === courseId)?.lessons.find(l => l.type === 'quiz');

        if (passed && quizLesson) {
            handleCompleteLesson(courseId, quizLesson.id);
        }

        setProgress(prev => ({
            ...prev,
            [courseId]: {
                ...(prev[courseId] || { completedLessons: [] }),
                quizScore: score
            }
        }));

        return passed;
    }, [handleCompleteLesson]);
    
    const handleGenerateCertificate = (course: Course, studentName: string) => {
        generateCertificatePdf(course, studentName);
    };

    const activeCourse = activeCourseId ? COURSES.find(c => c.id === activeCourseId) : null;
    const activeLesson = activeLessonId && activeCourse ? activeCourse.lessons.find(l => l.id === activeLessonId) : null;

    const value = {
        progress,
        currentPage,
        activeCourse,
        activeLesson,
        handleNavigate,
        handleSelectCourse,
        handleSelectLesson,
        handleCompleteLesson,
        handleSubmitQuiz,
        handleGenerateCertificate
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
