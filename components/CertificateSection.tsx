
import React, { useState } from 'react';
import { Course } from '../types';
import { CertificateIcon } from './Icons';

interface CertificateSectionProps {
    course: Course;
    onGenerateCertificate: (course: Course, studentName: string) => void;
}

const CertificateSection: React.FC<CertificateSectionProps> = ({ course, onGenerateCertificate }) => {
    const [name, setName] = useState('');

    const handleGenerate = () => {
        if (name.trim()) {
            onGenerateCertificate(course, name);
        } else {
            alert('Por favor, digite seu nome completo.');
        }
    };

    return (
        <div className="mt-8 p-6 bg-green-50 border-2 border-dashed border-green-300 rounded-lg text-center fade-in">
            <h3 className="text-2xl font-bold text-green-800">Parabéns, você concluiu o curso!</h3>
            <p className="text-green-700 my-4">Você completou todas as lições e foi aprovado no questionário. Agora você pode gerar seu certificado de conclusão.</p>
            <div className="max-w-md mx-auto">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Digite seu nome completo para o certificado"
                    className="w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mb-4"
                />
                <button
                    onClick={handleGenerate}
                    className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition-colors disabled:bg-green-300"
                    disabled={!name.trim()}
                >
                    <CertificateIcon className="h-5 w-5 mr-2" />
                    Gerar Certificado (PDF)
                </button>
            </div>
        </div>
    );
};

export default CertificateSection;
