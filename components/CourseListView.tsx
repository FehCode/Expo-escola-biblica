import React from 'react';
import { COURSES } from '../constants';
import { useAppContext } from '../context/AppContext';
import CourseCard from './CourseCard';
import BiblicalExplainer from './BiblicalExplainer';

const CourseListView: React.FC = () => {
    const { progress, handleSelectCourse } = useAppContext();
    return (
        <div className="fade-in">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Catálogo de Cursos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {COURSES.map(course => (
                    <CourseCard
                        key={course.id}
                        course={course}
                        progress={progress[course.id]}
                        onSelectCourse={handleSelectCourse}
                    />
                ))}
            </div>
            <BiblicalExplainer />
        </div>
    );
};

export default CourseListView;
