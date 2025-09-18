import React from 'react';
import { useAppContext } from '../context/AppContext';
import { COURSES } from '../constants';
import { BookOpenIcon, BeakerIcon, ChatBubbleLeftRightIcon, ChevronRightIcon } from './Icons';

const Dashboard: React.FC = () => {
    const { progress, handleSelectCourse, handleNavigate } = useAppContext();

    const coursesCompleted = COURSES.filter(course => {
        const p = progress[course.id];
        if (!p) return false;
        const quiz = course.lessons.find(l => l.type === 'quiz');
        return quiz ? p.completedLessons.includes(quiz.id) : false;
    }).length;

    const totalLessons = COURSES.reduce((acc, course) => acc + course.lessons.length, 0);
    const completedLessons = Object.values(progress).reduce((acc, p) => acc + p.completedLessons.length, 0);
    const overallProgress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
    
    const inProgressCourse = COURSES.find(course => {
        const p = progress[course.id];
        if (!p || p.completedLessons.length === 0) return false;
        const quiz = course.lessons.find(l => l.type === 'quiz');
        return quiz ? !p.completedLessons.includes(quiz.id) : p.completedLessons.length < course.lessons.length;
    });
    
    const continueCourse = inProgressCourse || COURSES.find(c => progress[c.id] && progress[c.id].lastLesson);
    const continueLesson = continueCourse ? continueCourse.lessons.find(l => l.id === progress[continueCourse!.id]?.lastLesson) : null;


    return (
        <div className="fade-in space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-800">Seu Painel de Controle</h1>
                <p className="mt-2 text-slate-600">Bem-vindo de volta! Continue sua jornada de aprendizado.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
                    <div className="bg-indigo-100 p-3 rounded-full">
                        <BookOpenIcon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                        <p className="text-sm text-slate-500">Cursos Concluídos</p>
                        <p className="text-2xl font-bold text-slate-800">{coursesCompleted}</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm text-slate-500">Progresso Geral</p>
                        <p className="text-2xl font-bold text-slate-800">{overallProgress}%</p>
                    </div>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
                    <div className="bg-sky-100 p-3 rounded-full">
                       <BeakerIcon className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                        <p className="text-sm text-slate-500">Lições Completas</p>
                        <p className="text-2xl font-bold text-slate-800">{completedLessons}</p>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold text-slate-800 mb-4">Continue de onde parou</h2>
                    {continueCourse && continueLesson ? (
                        <div 
                            className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors"
                            onClick={() => handleSelectCourse(continueCourse.id)}
                        >
                            <p className="font-semibold text-indigo-700">{continueCourse.title}</p>
                            <p className="text-slate-600">Próxima lição: {continueLesson.title}</p>
                        </div>
                    ) : (
                        <div 
                            className="p-4 text-center border-2 border-dashed border-slate-300 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors"
                            onClick={() => handleNavigate('courses')}
                        >
                            <p className="text-slate-500">Você ainda não começou nenhum curso.</p>
                             <button className="mt-2 text-indigo-600 font-semibold hover:underline">
                                Ver catálogo de cursos
                            </button>
                        </div>
                    )}
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold text-slate-800 mb-4">Acesso Rápido</h2>
                    <div className="space-y-3">
                         <button onClick={() => handleNavigate('courses')} className="w-full flex justify-between items-center p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-3">
                                <BookOpenIcon className="h-6 w-6 text-slate-500" />
                                <span className="font-semibold text-slate-700">Catálogo de Cursos</span>
                            </div>
                            <ChevronRightIcon className="h-5 w-5 text-slate-400" />
                        </button>
                        <button onClick={() => handleNavigate('questionBank')} className="w-full flex justify-between items-center p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                             <div className="flex items-center gap-3">
                                <BeakerIcon className="h-6 w-6 text-slate-500" />
                                <span className="font-semibold text-slate-700">Banco de Questões</span>
                            </div>
                            <ChevronRightIcon className="h-5 w-5 text-slate-400" />
                        </button>
                        <button onClick={() => handleNavigate('apolo')} className="w-full flex justify-between items-center p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-3">
                                <ChatBubbleLeftRightIcon className="h-6 w-6 text-slate-500" />
                                <span className="font-semibold text-slate-700">Apolo Chatbot</span>
                            </div>
                            <ChevronRightIcon className="h-5 w-5 text-slate-400" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
