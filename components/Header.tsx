import React from 'react';
import { Page } from '../types';
import { BookOpenIcon, HomeIcon, BeakerIcon, ChatBubbleLeftRightIcon } from './Icons';
import { useAppContext } from '../context/AppContext';

interface NavLinkProps {
    onClick: () => void;
    isActive: boolean;
    children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ onClick, isActive, children }) => {
    return (
        <button 
            onClick={onClick}
            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${isActive 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`
            }
            aria-current={isActive ? 'page' : undefined}
        >
            {children}
        </button>
    );
};

const Header: React.FC = () => {
    const { currentPage, handleNavigate } = useAppContext();

    return (
        <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-20 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <button onClick={() => handleNavigate('dashboard')} className="text-xl font-bold text-slate-900 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1">
                            <BookOpenIcon className="h-7 w-7 text-indigo-600" />
                            <h1 className="hidden sm:block">Escola de Exposição Bíblica</h1>
                        </button>
                    </div>
                    <nav className="flex items-center gap-1 sm:gap-2">
                        <NavLink onClick={() => handleNavigate('dashboard')} isActive={currentPage === 'dashboard'}>
                            <HomeIcon className="h-5 w-5"/>
                            <span className="hidden sm:inline">Painel</span>
                        </NavLink>
                        <NavLink onClick={() => handleNavigate('courses')} isActive={currentPage === 'courses' || currentPage === 'detail'}>
                            <BookOpenIcon className="h-5 w-5"/>
                            <span className="hidden sm:inline">Cursos</span>
                        </NavLink>
                         <NavLink onClick={() => handleNavigate('questionBank')} isActive={currentPage === 'questionBank'}>
                            <BeakerIcon className="h-5 w-5"/>
                            <span className="hidden sm:inline">Questões</span>
                        </NavLink>
                        <NavLink onClick={() => handleNavigate('apolo')} isActive={currentPage === 'apolo'}>
                           <ChatBubbleLeftRightIcon className="h-5 w-5" />
                           <span className="hidden sm:inline">Apolo</span>
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
