import React from 'react';
import { Page } from '../types';
import { BookOpenIcon, HomeIcon, BeakerIcon, ChatBubbleLeftRightIcon } from './Icons';

interface HeaderProps {
    onNavigate: (page: Page) => void;
    currentPage: Page;
}

const NavLink: React.FC<{
    onClick: () => void;
    isActive: boolean;
    children: React.ReactNode;
}> = ({ onClick, isActive, children }) => {
    return (
        <button 
            onClick={onClick}
            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${isActive 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`
            }
        >
            {children}
        </button>
    );
};

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
    return (
        <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-20 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <button onClick={() => onNavigate('courses')} className="text-xl font-bold text-slate-900 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1">
                            <BookOpenIcon className="h-7 w-7 text-indigo-600" />
                            <h1 className="hidden sm:block">Escola de Exposição Bíblica</h1>
                        </button>
                    </div>
                    <nav className="flex items-center gap-2 sm:gap-4">
                        <NavLink onClick={() => onNavigate('courses')} isActive={currentPage === 'courses' || currentPage === 'detail'}>
                            <HomeIcon className="h-5 w-5"/>
                            <span className="hidden sm:inline">Cursos</span>
                        </NavLink>
                         <NavLink onClick={() => onNavigate('questionBank')} isActive={currentPage === 'questionBank'}>
                            <BeakerIcon className="h-5 w-5"/>
                            <span className="hidden sm:inline">Banco de Questões</span>
                        </NavLink>
                        <NavLink onClick={() => onNavigate('apolo')} isActive={currentPage === 'apolo'}>
                           <ChatBubbleLeftRightIcon className="h-5 w-5" />
                           <span className="hidden sm:inline">Apolo Chatbot</span>
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
