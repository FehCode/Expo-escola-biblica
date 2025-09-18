
import React, { useState } from 'react';
import { Lesson } from '../types';
import { generateSermonOutline } from '../services/geminiService';
import Spinner, { ButtonSpinner } from './Spinner';

interface SermonOutlineGeneratorProps {
    lesson: Lesson;
}

const SermonOutlineGenerator: React.FC<SermonOutlineGeneratorProps> = ({ lesson }) => {
    const [passage, setPassage] = useState('');
    const [outline, setOutline] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerate = async () => {
        if (!passage.trim()) return;
        setIsLoading(true);
        setOutline('');
        const result = await generateSermonOutline(passage);
        setOutline(result);
        setIsLoading(false);
    };

    return (
        <div>
            <div className="prose-custom max-w-none" dangerouslySetInnerHTML={{ __html: lesson.content }} />
            <div id="sermon-generator" className="mt-6">
                <label htmlFor="sermon-passage-input" className="block text-sm font-medium text-slate-700">Passagem Bíblica</label>
                <input
                    type="text"
                    id="sermon-passage-input"
                    value={passage}
                    onChange={(e) => setPassage(e.target.value)}
                    className="mt-1 block w-full md:w-1/2 px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Ex: Efésios 2:1-10"
                    disabled={isLoading}
                />
                <button
                    onClick={handleGenerate}
                    className="mt-2 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors disabled:bg-indigo-400 w-36"
                    disabled={isLoading || !passage.trim()}
                >
                    {isLoading ? <ButtonSpinner /> : '✨ Gerar Esboço'}
                </button>
                {isLoading && <Spinner />}
                {outline && !isLoading && (
                    <div
                        id="sermon-outline-container"
                        className="mt-4 p-4 bg-slate-50 rounded-md border border-slate-200 prose-custom max-w-none"
                        dangerouslySetInnerHTML={{ __html: outline }}
                    />
                )}
            </div>
        </div>
    );
};

export default SermonOutlineGenerator;
