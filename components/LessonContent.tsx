
import React from 'react';
import { Course, Lesson } from '../types';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';
import AITutor from './AITutor';
import PracticeQuestions from './PracticeQuestions';
import SermonOutlineGenerator from './SermonOutlineGenerator';
import CertificateSection from './CertificateSection';

interface LessonContentProps {
    course: Course;
    lesson: Lesson;
    isCompleted: boolean;
    onComplete: () => void;
    onNavigate: (direction: 'prev' | 'next') => void;
    onStartQuiz: () => void;
    onGenerateCertificate: (course: Course, studentName: string) => void;
    isQuizCompleted: boolean;
}

const LessonContent: React.FC<LessonContentProps> = (props) => {
    const { lesson, isCompleted, onComplete, onNavigate, onStartQuiz, course, onGenerateCertificate, isQuizCompleted } = props;

    const currentIndex = course.lessons.findIndex(l => l.id === lesson.id);
    const isFirstLesson = currentIndex === 0;
    const isLastLesson = currentIndex === course.lessons.length - 1;

    const handleComplete = () => {
        onComplete();
        if (!isLastLesson) {
            onNavigate('next');
        }
    };
    
    return (
        <div className="w-full md:w-2/3 lg:w-3/4 p-6 sm:p-8">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">{lesson.title}</h2>
            
            {lesson.type === 'generator' ? (
                 <SermonOutlineGenerator lesson={lesson} />
            ) : lesson.type === 'quiz' ? (
                <div className="prose-custom max-w-none">
                    <p>Este é o questionário final do curso. Você precisa ter completado todas as outras lições para iniciá-lo.</p>
                    <p>Quando estiver pronto, clique no botão abaixo para começar.</p>
                </div>
            ) : (
                <div className="prose-custom max-w-none" dangerouslySetInnerHTML={{ __html: lesson.content }} />
            )}
            
            {lesson.type !== 'quiz' && lesson.type !== 'generator' && (
                <>
                    <AITutor lesson={lesson} />
                    <PracticeQuestions lesson={lesson} />
                </>
            )}

            {isQuizCompleted && (
                 <CertificateSection course={course} onGenerateCertificate={onGenerateCertificate} />
            )}

            {!isQuizCompleted && (
                <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center flex-wrap gap-2">
                    <button
                        onClick={() => onNavigate('prev')}
                        disabled={isFirstLesson}
                        className="inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronLeftIcon className="h-5 w-5 mr-2" />
                        Anterior
                    </button>

                    {lesson.type === 'quiz' ? (
                        <button
                            onClick={onStartQuiz}
                            disabled={isCompleted}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed"
                        >
                            {isCompleted ? 'Questionário Concluído' : 'Fazer Questionário'}
                        </button>
                    ) : (
                        <button
                            onClick={handleComplete}
                            disabled={isCompleted}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed"
                        >
                            {isCompleted ? 'Concluída' : 'Marcar como Concluída'}
                        </button>
                    )}

                    <button
                        onClick={() => onNavigate('next')}
                        disabled={isLastLesson}
                        className="inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Próxima
                        <ChevronRightIcon className="h-5 w-5 ml-2" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default LessonContent;
