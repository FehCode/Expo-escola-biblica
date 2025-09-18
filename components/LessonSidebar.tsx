import React from 'react';
import { Course, CourseProgress } from '../types';
import { CheckCircleIcon, EmptyCircleIcon, LessonIcon, QuizIcon, GeneratorIcon } from './Icons';

interface LessonSidebarProps {
    course: Course;
    activeLessonId: string;
    progress: CourseProgress;
    onSelectLesson: (lessonId: string) => void;
    areAllLessonsCompleted: boolean;
}

const LessonSidebar: React.FC<LessonSidebarProps> = ({ course, activeLessonId, progress, onSelectLesson, areAllLessonsCompleted }) => {
    
    const getIcon = (type: string | undefined) => {
        switch (type) {
            case 'quiz': return <QuizIcon className="h-5 w-5 mr-3 flex-shrink-0" />;
            case 'generator': return <GeneratorIcon className="h-5 w-5 mr-3 flex-shrink-0" />;
            default: return <LessonIcon className="h-5 w-5 mr-3 flex-shrink-0" />;
        }
    };

    // Separate lessons into completed and pending, maintaining original order within each group
    const completedLessons = course.lessons.filter(lesson => progress.completedLessons.includes(lesson.id));
    const pendingLessons = course.lessons.filter(lesson => !progress.completedLessons.includes(lesson.id));
    const sortedLessons = [...completedLessons, ...pendingLessons];

    return (
        <aside className="w-full md:w-1/3 lg:w-1/3 bg-slate-50/75 border-r border-slate-200">
            <div className="p-4 border-b border-slate-200">
                <h3 className="text-lg font-bold text-slate-800 truncate">{course.title}</h3>
            </div>
            <nav className="p-2 space-y-1 max-h-[70vh] overflow-y-auto">
                {sortedLessons.map(lesson => {
                    const isCompleted = progress.completedLessons.includes(lesson.id);
                    const isActive = lesson.id === activeLessonId;
                    const isQuizLocked = lesson.type === 'quiz' && !areAllLessonsCompleted;

                    return (
                        <button
                            key={lesson.id}
                            onClick={() => onSelectLesson(lesson.id)}
                            disabled={isQuizLocked}
                            className={`w-full text-left p-3 rounded-md text-slate-700 font-medium flex items-center transition-all duration-200 ease-in-out
                                ${isActive ? 'bg-indigo-100 text-indigo-800' : 'hover:bg-slate-200 hover:translate-x-1'}
                                ${isQuizLocked ? 'opacity-50 cursor-not-allowed' : ''}
                            `}
                        >
                            {getIcon(lesson.type)}
                            <span className="flex-grow text-sm">{lesson.title}</span>
                            {isCompleted ? (
                                <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 flex-shrink-0" />
                            ) : (
                                <EmptyCircleIcon className="h-5 w-5 text-slate-300 ml-2 flex-shrink-0" />
                            )}
                        </button>
                    );
                })}
            </nav>
        </aside>
    );
};

export default LessonSidebar;