
import React, { useState } from 'react';
import { Lesson } from '../types';
import { getAIAnswer, deepenLessonTopic } from '../services/geminiService';
import Spinner, { ButtonSpinner } from './Spinner';
import { AiTutorIcon } from './Icons';

interface AITutorProps {
    lesson: Lesson;
}

const AITutor: React.FC<AITutorProps> = ({ lesson }) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [isAsking, setIsAsking] = useState(false);
    const [isDeepening, setIsDeepening] = useState(false);
    const [deepenedContent, setDeepenedContent] = useState('');

    const handleAsk = async () => {
        if (!question.trim()) return;
        setIsAsking(true);
        setAnswer('');
        const result = await getAIAnswer(question, lesson.title, lesson.content);
        setAnswer(result);
        setIsAsking(false);
    };

    const handleDeepen = async () => {
        setIsDeepening(true);
        setDeepenedContent('');
        const result = await deepenLessonTopic(lesson.title);
        setDeepenedContent(result);
        setIsDeepening(false);
    };

    return (
        <>
            <div className="mt-10 pt-6 border-t border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <AiTutorIcon className="h-6 w-6 text-indigo-500" />
                    Tire suas Dúvidas com a IA
                </h3>
                <p className="text-slate-600 mb-4">Tem alguma pergunta sobre esta lição? Pergunte à nossa assistente de IA para obter uma explicação.</p>
                <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition"
                    placeholder="Ex: Qual a diferença entre contexto histórico e cultural?"
                    disabled={isAsking}
                    rows={2}
                />
                <div className="mt-2 flex items-center gap-2">
                    <button
                        onClick={handleAsk}
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors disabled:bg-indigo-400 w-36"
                        disabled={isAsking || !question.trim()}
                    >
                        {isAsking ? <ButtonSpinner/> : '✨ Perguntar à IA'}
                    </button>
                    <button
                        onClick={handleDeepen}
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 transition-colors disabled:bg-purple-400 w-40"
                        disabled={isDeepening}
                    >
                        {isDeepening ? <ButtonSpinner/> : '🔮 Aprofundar Tema'}
                    </button>
                </div>
                {isAsking && <Spinner />}
                {answer && !isAsking && (
                    <div className="mt-4 p-4 bg-slate-50 rounded-md border border-slate-200 prose-custom max-w-none" dangerouslySetInnerHTML={{ __html: answer }} />
                )}
                 {isDeepening && <Spinner />}
                 {deepenedContent && !isDeepening && (
                    <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200 prose-custom max-w-none">
                        <h4 className="font-bold text-purple-800 !mt-0 !mb-2">Aprofundando o Tema</h4>
                        <div dangerouslySetInnerHTML={{ __html: deepenedContent }} />
                    </div>
                 )}
            </div>
        </>
    );
};

export default AITutor;
