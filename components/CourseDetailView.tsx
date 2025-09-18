import React, { useState } from 'react';
import { Course, Lesson, CourseProgress, Question } from '../types';
import { ChevronLeftIcon } from './Icons';
import LessonSidebar from './LessonSidebar';
import LessonContent from './LessonContent';
import QuizModal from './QuizModal';

interface CourseDetailViewProps {
    course: Course;
    activeLesson: Lesson;
    progress: CourseProgress;
    onSelectLesson: (lessonId: string) => void;
    onCompleteLesson: (courseId: string, lessonId: string) => void;
    onSubmitQuiz: (courseId: string, score: number) => boolean;
    onBack: () => void;
    onGenerateCertificate: (course: Course, studentName: string) => void;
}

const CourseDetailView: React.FC<CourseDetailViewProps> = (props) => {
    const { course, activeLesson, progress, onSelectLesson, onCompleteLesson, onSubmitQuiz, onBack, onGenerateCertificate } = props;
    const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
    
    const currentIndex = course.lessons.findIndex(l => l.id === activeLesson.id);

    const handleNavigateLesson = (direction: 'prev' | 'next') => {
        const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
        if (newIndex >= 0 && newIndex < course.lessons.length) {
            const nextLesson = course.lessons[newIndex];
            if (nextLesson.type === 'quiz' && !areAllLessonsCompleted) {
                alert('Você precisa completar todas as lições antes de fazer o questionário.');
                return;
            }
            onSelectLesson(course.lessons[newIndex].id);
        }
    };
    
    const areAllLessonsCompleted = course.lessons
        .filter(l => l.type !== 'quiz')
        .every(l => progress.completedLessons.includes(l.id));

    return (
        <div className="fade-in">
            <button onClick={onBack} className="mb-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                <ChevronLeftIcon className="h-5 w-5 mr-2" />
                Voltar para Cursos
            </button>

            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="md:flex">
                    <LessonSidebar
                        course={course}
                        activeLessonId={activeLesson.id}
                        progress={progress}
                        onSelectLesson={onSelectLesson}
                        areAllLessonsCompleted={areAllLessonsCompleted}
                    />
                    <LessonContent
                        course={course}
                        lesson={activeLesson}
                        isCompleted={progress.completedLessons.includes(activeLesson.id)}
                        onComplete={() => onCompleteLesson(course.id, activeLesson.id)}
                        onNavigate={handleNavigateLesson}
                        onStartQuiz={() => setIsQuizModalOpen(true)}
                        onGenerateCertificate={onGenerateCertificate}
                        isQuizCompleted={course.lessons.find(l => l.type === 'quiz') ? progress.completedLessons.includes(course.lessons.find(l => l.type === 'quiz')!.id) : false}
                    />
                </div>
            </div>
            
            {isQuizModalOpen && activeLesson.type === 'quiz' && (
                <QuizModal
                    lesson={activeLesson}
                    onClose={() => setIsQuizModalOpen(false)}
                    onSubmit={(userAnswers) => {
                        let score = 0;
                        activeLesson.questions?.forEach((q, index) => {
                            if (userAnswers[index] === q.answer) {
                                score++;
                            }
                        });
                        const finalScore = score / (activeLesson.questions?.length || 1);
                        return onSubmitQuiz(course.id, finalScore);
                    }}
                />
            )}
        </div>
    );
};

export default CourseDetailView;
