import React, { useState } from 'react';
import { Lesson } from '../types';
import { generatePracticeQuestions } from '../services/geminiService';
import Spinner, { ButtonSpinner } from './Spinner';
import { PracticeIcon } from './Icons';

interface PracticeQuestionsProps {
    lesson: Lesson;
}

const PracticeQuestions: React.FC<PracticeQuestionsProps> = ({ lesson }) => {
    const [questionsHtml, setQuestionsHtml] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [areAnswersRevealed, setAreAnswersRevealed] = useState(false);

    const handleGenerate = async () => {
        setIsLoading(true);
        setQuestionsHtml('');
        setAreAnswersRevealed(false);
        const result = await generatePracticeQuestions(lesson.content);
        setQuestionsHtml(result);
        setIsLoading(false);
    };

    const parseAndRenderQuestions = (html: string) => {
        if (!html) return '';

        const questionBlocksRegex = /(\d\..*?)(?=<br><br>\d\.|$)/gs;
        const optionRegex = /<br>((?:CORRECT_ANSWER::)?[A-D]\..*?)(?=<br>|$)/g;

        const processedHtml = html.replace(questionBlocksRegex, (questionBlock) => {
            let blockContent = questionBlock;
            const options = Array.from(blockContent.matchAll(optionRegex));
            
            options.forEach(match => {
                const fullOptionText = match[1];
                const isCorrect = fullOptionText.includes('CORRECT_ANSWER::');
                const cleanOptionText = fullOptionText.replace('CORRECT_ANSWER::', '').trim();
                
                const newOptionDiv = `<div class="practice-question-option mt-2 p-3 border-2 border-slate-200 rounded-md transition hover:bg-slate-100" data-is-correct="${isCorrect}">${cleanOptionText}</div>`;
                
                blockContent = blockContent.replace(match[0], newOptionDiv);
            });

            return `<div class="mb-6 p-4 border rounded-md bg-white">${blockContent}</div>`;
        });
        
        return processedHtml.replace(/<br>/g, '');
    }
    
    return (
        <div className="mt-8 pt-6 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <PracticeIcon className="h-6 w-6 text-teal-600" />
                Teste seu Conhecimento
            </h3>
            <p className="text-slate-600 mb-4">Gere questões práticas baseadas nesta lição para revisar o conteúdo aprendido.</p>
            <button
                onClick={handleGenerate}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 transition-colors disabled:bg-teal-400 w-52"
                disabled={isLoading}
            >
                {isLoading ? <ButtonSpinner /> : '📝 Gerar Questões'}
            </button>
            <div className="mt-4">
                {isLoading && <Spinner />}
                {questionsHtml && !isLoading && (
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: parseAndRenderQuestions(questionsHtml) }} />
                        <button 
                            onClick={() => setAreAnswersRevealed(true)}
                            className={`mt-4 inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 ${areAnswersRevealed || !questionsHtml ? 'hidden' : ''}`}
                        >
                            Revelar Respostas
                        </button>
                    </div>
                )}
            </div>
            {areAnswersRevealed && <style>{`
                .practice-question-option[data-is-correct="true"] {
                    background-color: #dcfce7; /* green-100 */
                    border-color: #22c55e; /* green-500 */
                    font-weight: 500;
                }
            `}</style>}
        </div>
    );
};

export default PracticeQuestions;
