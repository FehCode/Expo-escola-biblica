
import React, { useState } from 'react';
import { Lesson } from '../types';

interface QuizModalProps {
    lesson: Lesson;
    onClose: () => void;
    onSubmit: (answers: (string | null)[]) => boolean;
}

const QuizModal: React.FC<QuizModalProps> = ({ lesson, onClose, onSubmit }) => {
    const [answers, setAnswers] = useState<(string | null)[]>(new Array(lesson.questions?.length || 0).fill(null));
    const [result, setResult] = useState<{ passed: boolean, score: number } | null>(null);

    const handleAnswerChange = (questionIndex: number, option: string) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = option;
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        const score = answers.reduce((acc, answer, index) => {
            if (lesson.questions && answer === lesson.questions[index].answer) {
                return acc + 1;
            }
            return acc;
        }, 0);
        
        const passed = onSubmit(answers);
        setResult({ passed, score });
    };

    const totalQuestions = lesson.questions?.length || 0;

    return (
        <div className="fixed inset-0 z-30 flex items-center justify-center p-4 bg-black bg-opacity-50" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                {result === null ? (
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4">{lesson.title}</h3>
                        <div>
                            {lesson.questions?.map((q, qIndex) => (
                                <div key={qIndex} className="mb-6">
                                    <p className="font-semibold mb-3 text-slate-800">{qIndex + 1}. {q.question}</p>
                                    <div className="space-y-2">
                                        {q.options.map((opt, oIndex) => (
                                            <label 
                                                key={oIndex} 
                                                className={`block p-3 border-2 rounded-md cursor-pointer transition-all duration-200
                                                    ${answers[qIndex] === opt 
                                                        ? 'border-indigo-500 bg-indigo-50 shadow-md' 
                                                        : 'border-slate-200 hover:bg-slate-100'}`
                                                }
                                            >
                                                <input
                                                    type="radio"
                                                    name={`question-${qIndex}`}
                                                    value={opt}
                                                    checked={answers[qIndex] === opt}
                                                    onChange={() => handleAnswerChange(qIndex, opt)}
                                                    className="mr-3 accent-indigo-600"
                                                />
                                                <span className="text-slate-700">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 flex justify-end gap-3">
                            <button onClick={onClose} className="px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50">Cancelar</button>
                            <button onClick={handleSubmit} className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">Enviar Respostas</button>
                        </div>
                    </div>
                ) : (
                    <div className="p-6 text-center">
                        <h3 className="text-2xl font-bold mb-2">Resultado do Questionário</h3>
                        <p className={`text-5xl font-bold my-4 ${result.passed ? 'text-green-600' : 'text-red-600'}`}>
                            {Math.round((result.score / totalQuestions) * 100)}%
                        </p>
                        <p className="mb-4 text-slate-600">Você acertou {result.score} de {totalQuestions} perguntas.</p>
                        <p className="mb-6 font-semibold text-lg">{result.passed ? 'Parabéns, você foi aprovado!' : 'Você não atingiu a nota mínima. Estude um pouco mais e tente novamente.'}</p>
                        <button onClick={onClose} className="px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">Fechar</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuizModal;
