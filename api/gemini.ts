import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { task, payload } = req.body;

    try {
        let response: GenerateContentResponse;

        if (task === 'getApoloResponse') {
            const { history, newMessage } = payload as { history: ChatMessage[], newMessage: string };
            const systemInstruction = "Você é Apolo, um assistente teológico especialista, amigável e erudito. Sua missão é responder perguntas sobre a Bíblia, teologia, história da igreja e vida cristã de forma clara, precisa e pastoral. Baseie suas respostas nas Escrituras e em uma perspectiva cristã histórica. Formate suas respostas usando markdown para clareza (títulos, listas, negrito).";
            
            // Map frontend ChatMessage to backend format if they differ, here they are the same
            const contents = [...history, { role: 'user' as const, parts: [{ text: newMessage }] }];

            response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: contents,
                config: {
                    maxOutputTokens: 1000,
                    thinkingConfig: { thinkingBudget: 200 },
                    systemInstruction: systemInstruction,
                },
            });

        } else {
            let prompt = '';
            switch (task) {
                case 'getPassageExplanation':
                    prompt = `Você é um teólogo e especialista em exegese bíblica. Forneça uma explicação clara e detalhada da seguinte passagem bíblica: ${payload.passage}. Sua explicação deve abordar o contexto, os principais temas, o significado dos termos importantes e a aplicação prática para os dias de hoje. Mantenha uma linguagem acessível e formate com títulos em negrito (markdown) para cada seção, como **Contexto**, **Análise do Texto** e **Aplicação**.`;
                    break;
                case 'getRelatedPassages':
                    prompt = `Com base na passagem bíblica "${payload.passage}", sugira 3 a 5 passagens relacionadas para um estudo mais aprofundado. Para cada sugestão, forneça a referência e uma breve explicação (uma frase) de por que ela é relevante. Formate a resposta como uma lista simples usando markdown (*).`;
                    break;
                case 'getAIAnswer':
                    prompt = `Você é um assistente teológico especialista em exposição bíblica. O aluno está estudando a lição "${payload.lessonTitle}" cujo conteúdo é: """${payload.lessonContent}""". Responda a seguinte pergunta de forma clara, útil e concisa, mantendo o foco no tópico da lição. Pergunta: "${payload.question}"`;
                    break;
                case 'deepenLessonTopic':
                    prompt = `Você é um professor de seminário. O aluno acabou de estudar a lição "${payload.lessonTitle}". Forneça um insight adicional, um fato histórico relevante, ou uma conexão com outra passagem bíblica que aprofunde o entendimento do aluno sobre "${payload.lessonTitle}". Apresente a informação em um parágrafo conciso e envolvente.`;
                    break;
                case 'generatePracticeQuestions':
                    prompt = `Você é um assistente de IA criando um quiz teológico. Baseado no conteúdo da lição abaixo, crie exatamente 2 questões de múltipla escolha com 4 opções cada (A, B, C, D). REGRAS: 1. Separe cada questão com uma linha em branco. 2. Apenas uma opção pode ser a correta. 3. A opção correta DEVE ser prefixada com o marcador 'CORRECT_ANSWER::'. Exemplo: 'CORRECT_ANSWER::B. A resposta correta'. 4. Não use nenhuma formatação markdown (negrito, itálico, etc.). Conteúdo da Lição: """${payload.lessonContent}"""`;
                    break;
                case 'generateSermonOutline':
                    prompt = `Você é um pregador experiente. Crie um esboço de sermão expositivo simples, com uma introdução, três pontos principais e uma conclusão, baseado na seguinte passagem bíblica: ${payload.passage}. O esboço deve ser claro, prático e focar na ideia central do texto. Formate os títulos (Introdução, Pontos, Conclusão) com negrito (markdown).`;
                    break;
                default:
                    return res.status(400).json({ error: 'Invalid task specified' });
            }
            
            response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
            });
        }
        
        const text = response.text;
        res.status(200).json({ text });

    } catch (error) {
        console.error('Error in Gemini API handler:', error);
        res.status(500).json({ error: 'Failed to process request with Gemini API' });
    }
}