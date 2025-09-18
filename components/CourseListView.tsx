
import React from 'react';
import { Course, Progress } from '../types';
import CourseCard from './CourseCard';
import BiblicalExplainer from './BiblicalExplainer';

interface CourseListViewProps {
    courses: Course[];
    progress: Progress;
    onSelectCourse: (courseId: string) => void;
}

const CourseListView: React.FC<CourseListViewProps> = ({ courses, progress, onSelectCourse }) => {
    return (
        <div className="fade-in">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Meus Cursos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map(course => (
                    <CourseCard
                        key={course.id}
                        course={course}
                        progress={progress[course.id]}
                        onSelectCourse={onSelectCourse}
                    />
                ))}
            </div>
            <BiblicalExplainer />
        </div>
    );
};

export default CourseListView;
