import React, { useState } from 'react';
import { ChevronLeftIcon } from './Icons';
import LessonSidebar from './LessonSidebar';
import LessonContent from './LessonContent';
import QuizModal from './QuizModal';
import { useAppContext } from '../context/AppContext';

const CourseDetailView: React.FC = () => {
    const { 
        activeCourse: course, 
        activeLesson, 
        progress, 
        handleSelectLesson, 
        handleCompleteLesson, 
        handleSubmitQuiz, 
        handleNavigate,
        handleGenerateCertificate
    } = useAppContext();

    const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
    
    if (!course || !activeLesson) {
        // This should ideally not happen if routing is correct, but it's a safe fallback.
        handleNavigate('courses');
        return null; 
    }
    
    const courseProgress = progress[course.id] || { completedLessons: [], quizScore: null };
    const currentIndex = course.lessons.findIndex(l => l.id === activeLesson.id);

    const handleNavigateLesson = (direction: 'prev' | 'next') => {
        const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
        if (newIndex >= 0 && newIndex < course.lessons.length) {
            const nextLesson = course.lessons[newIndex];
            const areAllLessonsCompleted = course.lessons
                .filter(l => l.type !== 'quiz')
                .every(l => courseProgress.completedLessons.includes(l.id));
            
            if (nextLesson.type === 'quiz' && !areAllLessonsCompleted) {
                alert('Você precisa completar todas as lições antes de fazer o questionário.');
                return;
            }
            handleSelectLesson(course.lessons[newIndex].id);
        }
    };
    
    const areAllLessonsCompleted = course.lessons
        .filter(l => l.type !== 'quiz')
        .every(l => courseProgress.completedLessons.includes(l.id));

    return (
        <div className="fade-in">
            <button onClick={() => handleNavigate('courses')} className="mb-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                <ChevronLeftIcon className="h-5 w-5 mr-2" />
                Voltar para Cursos
            </button>

            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="md:flex">
                    <LessonSidebar
                        course={course}
                        activeLessonId={activeLesson.id}
                        progress={courseProgress}
                        onSelectLesson={handleSelectLesson}
                        areAllLessonsCompleted={areAllLessonsCompleted}
                    />
                    <LessonContent
                        course={course}
                        lesson={activeLesson}
                        isCompleted={courseProgress.completedLessons.includes(activeLesson.id)}
                        onComplete={() => handleCompleteLesson(course.id, activeLesson.id)}
                        onNavigate={handleNavigateLesson}
                        onStartQuiz={() => setIsQuizModalOpen(true)}
                        onGenerateCertificate={handleGenerateCertificate}
                        isQuizCompleted={course.lessons.find(l => l.type === 'quiz') ? courseProgress.completedLessons.includes(course.lessons.find(l => l.type === 'quiz')!.id) : false}
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
                        return handleSubmitQuiz(course.id, finalScore);
                    }}
                />
            )}
        </div>
    );
};

export default CourseDetailView;
