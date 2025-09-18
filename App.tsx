import React, { useState, useCallback, useEffect } from 'react';
import { Course, Progress, Page } from './types';
import { COURSES } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseListView from './components/CourseListView';
import CourseDetailView from './components/CourseDetailView';
import ApoloChatbot from './components/ApoloChatbot';
import QuestionBank from './components/QuestionBank';
import { generateCertificatePdf } from './services/pdfService';

const App: React.FC = () => {
    const [progress, setProgress] = useState<Progress>(() => {
        try {
            const savedProgress = localStorage.getItem('lmsProgress');
            return savedProgress ? JSON.parse(savedProgress) : {};
        } catch (error) {
            console.error("Failed to parse progress from localStorage", error);
            return {};
        }
    });

    const [currentPage, setCurrentPage] = useState<Page>('courses');
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

    const handleBackToCourses = useCallback(() => {
        handleNavigate('courses');
    }, []);

    const handleSelectLesson = useCallback((lessonId: string) => {
        setActiveLessonId(lessonId);
        if (activeCourseId) {
            setProgress(prev => ({
                ...prev,
                [activeCourseId]: {
                    ...prev[activeCourseId],
                    completedLessons: prev[activeCourseId]?.completedLessons || [],
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
                ...prev[courseId],
                completedLessons: prev[courseId]?.completedLessons || [],
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

    const renderPage = () => {
        switch (currentPage) {
            case 'courses':
                return <CourseListView courses={COURSES} progress={progress} onSelectCourse={handleSelectCourse} />;
            case 'detail':
                if (activeCourse && activeLesson) {
                    return <CourseDetailView
                        course={activeCourse}
                        activeLesson={activeLesson}
                        progress={progress[activeCourse.id] || { completedLessons: [], quizScore: null }}
                        onSelectLesson={handleSelectLesson}
                        onCompleteLesson={handleCompleteLesson}
                        onSubmitQuiz={handleSubmitQuiz}
                        onBack={handleBackToCourses}
                        onGenerateCertificate={handleGenerateCertificate}
                    />;
                }
                // Fallback to course list if detail view is not possible
                handleNavigate('courses');
                return null;
            case 'questionBank':
                return <QuestionBank />;
            case 'apolo':
                return <ApoloChatbot />;
            default:
                return <CourseListView courses={COURSES} progress={progress} onSelectCourse={handleSelectCourse} />;
        }
    }

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header onNavigate={handleNavigate} currentPage={currentPage} />
            <main className="flex-grow p-4 sm:p-6 lg:p-8 w-full max-w-7xl mx-auto">
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
};

export default App;
