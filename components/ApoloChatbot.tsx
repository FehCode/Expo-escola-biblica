import React, { useState, useRef, useEffect } from 'react';
import { getApoloResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { ButtonSpinner } from './Spinner';
import { PaperAirplaneIcon, UserIcon, CpuChipIcon, TrashIcon } from './Icons';

const CHAT_HISTORY_KEY = 'apoloChatHistory';
const MAX_HISTORY_MESSAGES = 50; // Limit to last 50 messages

const ApoloChatbot: React.FC = () => {
    const [history, setHistory] = useState<ChatMessage[]>(() => {
        try {
            const savedHistory = localStorage.getItem(CHAT_HISTORY_KEY);
            return savedHistory ? JSON.parse(savedHistory) : [];
        } catch (error) {
            console.error("Failed to parse chat history from localStorage", error);
            return [];
        }
    });
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
        try {
            const historyToSave = history.slice(-MAX_HISTORY_MESSAGES);
            localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(historyToSave));
        } catch (error) {
            console.error("Failed to save chat history to localStorage", error);
        }
    }, [history]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim() || isLoading) return;

        const newUserMessage: ChatMessage = {
            role: 'user',
            parts: [{ text: userInput }],
        };

        const currentHistory = [...history, newUserMessage];
        setHistory(currentHistory);
        setUserInput('');
        setIsLoading(true);

        const responseHtml = await getApoloResponse(history, userInput);
        
        const newModelMessage: ChatMessage = {
            role: 'model',
            parts: [{ text: responseHtml }],
        };

        setHistory(prev => [...prev, newModelMessage]);
        setIsLoading(false);
    };

    const handleClearHistory = () => {
        setHistory([]);
    };

    return (
        <div className="fade-in bg-white shadow-xl rounded-lg h-[80vh] flex flex-col">
            <div className="p-4 border-b border-slate-200 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                        <CpuChipIcon className="h-7 w-7 text-indigo-600"/>
                        Converse com Apolo
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">Seu assistente para dúvidas bíblicas e teológicas.</p>
                </div>
                <button 
                    onClick={handleClearHistory}
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                    title="Limpar histórico da conversa"
                >
                    <TrashIcon className="h-5 w-5" />
                    <span className="hidden sm:inline">Limpar</span>
                </button>
            </div>
            <div className="flex-grow p-4 overflow-y-auto">
                {history.length === 0 && !isLoading && (
                    <div className="text-center text-slate-500 h-full flex flex-col justify-center items-center">
                        <p className="text-lg">Faça uma pergunta para começar.</p>
                        <p className="text-sm mt-2">Ex: "Qual a diferença entre a aliança Abraâmica e a Mosaica?"</p>
                    </div>
                )}
                {history.map((msg, index) => (
                    <div key={index} className={`flex items-start gap-3 my-4 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                        {msg.role === 'model' && (
                           <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                                <CpuChipIcon className="h-5 w-5" />
                           </div>
                        )}
                        <div className={`max-w-xl p-3 rounded-lg ${msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-800'}`}>
                           <div className="prose-custom max-w-none" dangerouslySetInnerHTML={{ __html: msg.parts[0].text }} />
                        </div>
                         {msg.role === 'user' && (
                           <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                <UserIcon className="h-5 w-5" />
                           </div>
                        )}
                    </div>
                ))}
                 {isLoading && (
                    <div className="flex items-start gap-3 my-4">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                            <CpuChipIcon className="h-5 w-5" />
                        </div>
                        <div className="max-w-xl p-3 rounded-lg bg-slate-100 text-slate-800">
                            <div className="flex items-center gap-2">
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-indigo-600"></div>
                                <span>Pensando...</span>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <div className="p-4 border-t border-slate-200 bg-slate-50">
                <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Digite sua pergunta..."
                        className="flex-grow px-4 py-2 border border-slate-300 rounded-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !userInput.trim()}
                        className="inline-flex items-center justify-center h-10 w-10 rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors disabled:bg-indigo-300 disabled:cursor-not-allowed"
                    >
                        {isLoading ? <ButtonSpinner /> : <PaperAirplaneIcon className="h-5 w-5" />}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ApoloChatbot;