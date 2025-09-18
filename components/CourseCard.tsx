
import React from 'react';
import { Course, CourseProgress } from '../types';

interface CourseCardProps {
    course: Course;
    progress: CourseProgress | undefined;
    onSelectCourse: (courseId: string) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, progress, onSelectCourse }) => {
    const completedCount = progress?.completedLessons.length || 0;
    const totalLessons = course.lessons.length;
    const percentage = totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;

    return (
        <div 
            onClick={() => onSelectCourse(course.id)}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 cursor-pointer flex flex-col"
        >
            <div className="p-6 flex-grow">
                <div className="mb-3">
                    <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                        {totalLessons} Módulos
                    </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{course.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed h-24">{course.description}</p>
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-100">
                <div className="w-full bg-slate-200 rounded-full h-2.5 mb-2">
                    <div 
                        className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500" 
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
                <div className="text-right text-sm font-medium text-slate-600">{Math.round(percentage)}% Completo</div>
            </div>
        </div>
    );
};

export default CourseCard;
