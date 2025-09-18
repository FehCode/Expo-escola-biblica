import React, { useState, useMemo, useEffect } from 'react';
import { QUESTION_BANK } from '../constants';
import { StandaloneQuestion, QuestionHistoryItem } from '../types';
import { BeakerIcon, CheckCircleIcon, XCircleIcon } from './Icons';

const HISTORY_KEY = 'questionBankHistory';
const MAX_HISTORY_ITEMS = 10;

const QuestionBank: React.FC = () => {
    const allQuestions = useMemo(() => QUESTION_BANK.flatMap(cat => 
        cat.questions.map(q => ({ ...q, category: cat.name }))
    ), []);

    const [shuffledQuestions, setShuffledQuestions] = useState<StandaloneQuestion[]>(() => [...allQuestions].sort(() => 0.5 - Math.random()));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const [answerHistory, setAnswerHistory] = useState<QuestionHistoryItem[]>(() => {
        try {
            const savedHistory = localStorage.getItem(HISTORY_KEY);
            return savedHistory ? JSON.parse(savedHistory) : [];
        } catch (error) {
            console.error("Failed to parse question history from localStorage", error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(HISTORY_KEY, JSON.stringify(answerHistory));
        } catch (error) {
            console.error("Failed to save question history to localStorage", error);
        }
    }, [answerHistory]);

    const currentQuestion = shuffledQuestions[currentIndex];

    const handleAnswerSelect = (option: string) => {
        if (isAnswered) return;
        setSelectedAnswer(option);
    };

    const checkAnswer = () => {
        if (!selectedAnswer) return;
        setIsAnswered(true);
        const isCorrect = selectedAnswer === currentQuestion.answer;
        if (isCorrect) {
            setCorrectCount(prev => prev + 1);
        } else {
            setIncorrectCount(prev => prev + 1);
        }
        
        // Update history
        setAnswerHistory(prev => {
            const newHistoryItem: QuestionHistoryItem = { question: currentQuestion.question, isCorrect };
            const updatedHistory = [newHistoryItem, ...prev];
            return updatedHistory.slice(0, MAX_HISTORY_ITEMS);
        });
    };

    const nextQuestion = () => {
        setIsAnswered(false);
        setSelectedAnswer(null);
        if (currentIndex < shuffledQuestions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            // End of quiz, reshuffle and start over
            setShuffledQuestions([...allQuestions].sort(() => 0.5 - Math.random()));
            setCurrentIndex(0);
            setCorrectCount(0);
            setIncorrectCount(0);
        }
    };

    return (
        <div className="fade-in">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
                    <BeakerIcon className="h-8 w-8 text-indigo-600" />
                    Banco de Questões
                </h2>
                <div className="flex gap-4 text-sm font-semibold">
                    <span className="text-green-600">Corretas: {correctCount}</span>
                    <span className="text-red-600">Incorretas: {incorrectCount}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-lg shadow-xl">
                    {currentQuestion && (
                        <div>
                            <p className="text-sm font-medium text-indigo-600 mb-2">
                               { (currentQuestion as any).category }
                            </p>
                            <p className="text-lg font-semibold text-slate-800 mb-4">
                                {currentIndex + 1}. {currentQuestion.question}
                            </p>
                            <div className="space-y-3">
                                {currentQuestion.options.map((option, index) => {
                                    const isCorrect = option === currentQuestion.answer;
                                    const isSelected = option === selectedAnswer;
                                    let optionClass = 'border-slate-300 hover:bg-slate-100';
                                    if (isAnswered) {
                                        if (isCorrect) {
                                            optionClass = 'bg-green-100 border-green-400';
                                        } else if (isSelected && !isCorrect) {
                                            optionClass = 'bg-red-100 border-red-400';
                                        }
                                    } else if (isSelected) {
                                        optionClass = 'border-indigo-500 bg-indigo-50';
                                    }

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => handleAnswerSelect(option)}
                                            disabled={isAnswered}
                                            className={`w-full text-left p-3 border-2 rounded-md transition-colors ${optionClass} disabled:cursor-not-allowed`}
                                        >
                                            {option}
                                        </button>
                                    );
                                })}
                            </div>

                            {isAnswered && (
                                <div className="mt-4 p-4 bg-slate-50 rounded-md border-l-4 border-indigo-500">
                                    <h4 className="font-bold text-slate-800">Explicação:</h4>
                                    <p className="text-slate-600 mt-1">{currentQuestion.explanation}</p>
                                </div>
                            )}

                            <div className="mt-6">
                                {isAnswered ? (
                                    <button
                                        onClick={nextQuestion}
                                        className="w-full sm:w-auto px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                                    >
                                        Próxima Pergunta
                                    </button>
                                ) : (
                                    <button
                                        onClick={checkAnswer}
                                        disabled={!selectedAnswer}
                                        className="w-full sm:w-auto px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 disabled:bg-slate-300"
                                    >
                                        Verificar Resposta
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-xl">
                    <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Histórico Recente</h3>
                    {answerHistory.length > 0 ? (
                         <ul className="space-y-3">
                            {answerHistory.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm">
                                    {item.isCorrect ? (
                                        <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    ) : (
                                        <XCircleIcon className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    )}
                                    <span className="text-slate-600">{item.question}</span>
                                </li>
                            ))}
                         </ul>
                    ) : (
                        <p className="text-sm text-slate-500 text-center py-4">Nenhuma questão respondida ainda.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuestionBank;
