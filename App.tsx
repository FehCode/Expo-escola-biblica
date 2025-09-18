import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseListView from './components/CourseListView';
import CourseDetailView from './components/CourseDetailView';
import ApoloChatbot from './components/ApoloChatbot';
import QuestionBank from './components/QuestionBank';
import Dashboard from './components/Dashboard';
import { AppProvider, useAppContext } from './context/AppContext';

const PageRenderer: React.FC = () => {
    const { currentPage, activeCourse, activeLesson, handleNavigate } = useAppContext();

    switch (currentPage) {
        case 'dashboard':
            return <Dashboard />;
        case 'courses':
            return <CourseListView />;
        case 'detail':
            if (activeCourse && activeLesson) {
                return <CourseDetailView />;
            }
            // Fallback to course list if detail view is not possible
            handleNavigate('courses');
            return null;
        case 'questionBank':
            return <QuestionBank />;
        case 'apolo':
            return <ApoloChatbot />;
        default:
            return <Dashboard />;
    }
};

const App: React.FC = () => {
    return (
        <AppProvider>
            <div className="min-h-screen flex flex-col bg-slate-50">
                <Header />
                <main className="flex-grow p-4 sm:p-6 lg:p-8 w-full max-w-7xl mx-auto">
                    <PageRenderer />
                </main>
                <Footer />
            </div>
        </AppProvider>
    );
};

export default App;
