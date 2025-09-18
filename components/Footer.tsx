
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white mt-8 shadow-[0_-2px_5px_-1px_rgba(0,0,0,0.05)]">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} Escola de Exposição Bíblica. Todos os direitos reservados.
            </div>
        </footer>
    );
};

export default Footer;
