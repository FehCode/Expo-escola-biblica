
import React, { useState } from 'react';
import { getPassageExplanation, getRelatedPassages } from '../services/geminiService';
import { GlobeIcon } from './Icons';
import Spinner from './Spinner';

const BiblicalExplainer: React.FC = () => {
    const [passage, setPassage] = useState('');
    const [explanation, setExplanation] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showExplanation, setShowExplanation] = useState(false);
    const [suggestedPassages, setSuggestedPassages] = useState('');
    const [isSuggesting, setIsSuggesting] = useState(false);

    const handleExplain = async () => {
        if (!passage.trim()) return;
        setIsLoading(true);
        setShowExplanation(true);
        setExplanation('');
        setSuggestedPassages('');

        const result = await getPassageExplanation(passage);
        setExplanation(result);
        setIsLoading(false);

        if (!result.includes('text-red-600')) {
            setIsSuggesting(true);
            const suggestions = await getRelatedPassages(passage);
            setSuggestedPassages(suggestions);
            setIsSuggesting(false);
        }
    };

    return (
        <div className="mt-12 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <GlobeIcon className="h-7 w-7 text-indigo-600" />
                Explicador Bíblico com IA
            </h3>
            <p className="text-slate-600 mb-4">
                Digite uma passagem bíblica (ex: Gênesis 1:1) para receber uma explicação exegética detalhada.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
                <input
                    type="text"
                    value={passage}
                    onChange={(e) => setPassage(e.target.value)}
                    className="flex-grow px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Ex: Salmos 23:1-4"
                    disabled={isLoading}
                />
                <button
                    onClick={handleExplain}
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors disabled:bg-indigo-400"
                    disabled={isLoading || !passage.trim()}
                >
                    📖 Explicar Texto
                </button>
            </div>
            {showExplanation && (
                <div className="mt-4 p-4 bg-slate-50 rounded-md border border-slate-200 prose-custom max-w-none">
                    {isLoading ? <Spinner /> : <div dangerouslySetInnerHTML={{ __html: explanation }} />}
                    
                    {!isLoading && (
                        <div className="mt-6 pt-4 border-t border-slate-200">
                            {isSuggesting ? (
                                <Spinner />
                            ) : (
                                suggestedPassages && (
                                    <>
                                        <h4 className="text-lg font-semibold text-slate-700 !mt-0 !mb-2">Para Aprofundar:</h4>
                                        <div dangerouslySetInnerHTML={{ __html: suggestedPassages }} />
                                    </>
                                )
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default BiblicalExplainer;