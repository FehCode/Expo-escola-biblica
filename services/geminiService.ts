import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

async function callGemini(prompt: string, isChat: boolean = false): Promise<string> {
    if (!API_KEY) {
        return Promise.resolve("<p class='text-red-600'>A chave da API não está configurada. As funcionalidades de IA estão desativadas.</p>");
    }
    try {
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        const text = response.text;
        if (text) {
            // Basic markdown to HTML conversion
            let html = text
              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              .replace(/\*(.*?)\*/g, '<em>$1</em>');
            
            // Handle lists (both ordered and unordered)
            html = html.replace(/^\* (.*$)/gm, '<li>$1</li>');
            html = html.replace(/^\d+\. (.*$)/gm, '<li>$1</li>');
            html = html.replace(/(<\/li>\n<li>)/g, '</li><li>');

            const wrapInList = (listContent: string, listType: 'ul' | 'ol') => `<${listType}>${listContent}</${listType}>`;

            if (html.includes('<li>')) {
                 if (isChat) { // In chat, treat all lists as unordered for simplicity
                    html = html.replace(/(<li>.*<\/li>)/gs, (match) => wrapInList(match, 'ul'));
                } else {
                    // This logic can be improved, but for now, we'll check the source for numbers
                    const isOrdered = /^\d+\./m.test(text);
                    html = html.replace(/(<li>.*<\/li>)/gs, (match) => wrapInList(match, isOrdered ? 'ol' : 'ul'));
                }
            }


            // Handle headings
            html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
            html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');
            
            // Convert newlines to breaks, but clean up extras around block elements
            html = html.replace(/\n/g, '<br>');
            html = html.replace(/<br>\s*<(ul|ol|li|h2|h3)>/g, '<$1>');
            html = html.replace(/<\/(ul|ol|li|h2|h3)>\s*<br>/g, '</$1>');
            
            return html;
        } else {
             console.error('Unexpected API response structure:', response);
            return '<p class="text-red-600">Não foi possível gerar uma resposta. A estrutura da resposta da IA foi inesperada.</p>';
        }

    } catch (error) {
        console.error('Error calling Gemini API:', error);
        return `<p class="text-red-600">Ocorreu um erro ao contatar a IA. Por favor, tente novamente mais tarde.</p>`;
    }
}

// FIX: The original implementation of getApoloResponse used a deprecated `getGenerativeModel` API
// and had a logic error where it would make two API calls for a single chat message.
// This has been rewritten to use the modern `ai.models.generateContent` API for a stateless chat turn,
// which is more efficient and correct for how the chatbot component is designed.
// The markdown-to-HTML formatting logic from `callGemini` has been incorporated directly to avoid the second API call.
export const getApoloResponse = async (history: ChatMessage[], newMessage: string): Promise<string> => {
    if (!API_KEY) {
        return Promise.resolve("<p class='text-red-600'>A chave da API não está configurada. As funcionalidades de IA estão desativadas.</p>");
    }

    const systemInstruction = "Você é Apolo, um assistente teológico especialista, amigável e erudito. Sua missão é responder perguntas sobre a Bíblia, teologia, história da igreja e vida cristã de forma clara, precisa e pastoral. Baseie suas respostas nas Escrituras e em uma perspectiva cristã histórica. Formate suas respostas usando markdown para clareza (títulos, listas, negrito).";
    
    const contents = [...history, { role: 'user' as const, parts: [{ text: newMessage }] }];

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: contents,
            config: {
                maxOutputTokens: 1000,
                thinkingConfig: { thinkingBudget: 200 }, // Required when maxOutputTokens is set for flash model
                systemInstruction: systemInstruction,
            },
        });

        const text = response.text;
        if (text) {
            // Basic markdown to HTML conversion (from callGemini, for chat)
            let html = text
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>');
            
            html = html.replace(/^\* (.*$)/gm, '<li>$1</li>');
            html = html.replace(/^\d+\. (.*$)/gm, '<li>$1</li>');
            html = html.replace(/(<\/li>\n<li>)/g, '</li><li>');

            const wrapInList = (listContent: string) => `<ul>${listContent}</ul>`;

            if (html.includes('<li>')) {
                html = html.replace(/(<li>.*<\/li>)/gs, (match) => wrapInList(match));
            }

            html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
            html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');
            
            html = html.replace(/\n/g, '<br>');
            html = html.replace(/<br>\s*<(ul|ol|li|h2|h3)>/g, '<$1>');
            html = html.replace(/<\/(ul|ol|li|h2|h3)>\s*<br>/g, '</$1>');
            
            return html;
        } else {
            console.error('Unexpected API response structure:', response);
            return '<p class="text-red-600">Não foi possível gerar uma resposta. A estrutura da resposta da IA foi inesperada.</p>';
        }

    } catch (error) {
        console.error('Error calling Gemini Chat API:', error);
        return `<p class="text-red-600">Ocorreu um erro ao contatar a IA. Por favor, tente novamente mais tarde.</p>`;
    }
};


export const getPassageExplanation = (passage: string): Promise<string> => {
    const prompt = `Você é um teólogo e especialista em exegese bíblica. Forneça uma explicação clara e detalhada da seguinte passagem bíblica: ${passage}. Sua explicação deve abordar o contexto, os principais temas, o significado dos termos importantes e a aplicação prática para os dias de hoje. Mantenha uma linguagem acessível e formate com títulos em negrito (markdown) para cada seção, como **Contexto**, **Análise do Texto** e **Aplicação**.`;
    return callGemini(prompt);
};

export const getRelatedPassages = (passage: string): Promise<string> => {
    const prompt = `Com base na passagem bíblica "${passage}", sugira 3 a 5 passagens relacionadas para um estudo mais aprofundado. Para cada sugestão, forneça a referência e uma breve explicação (uma frase) de por que ela é relevante. Formate a resposta como uma lista simples usando markdown (*).`;
    return callGemini(prompt);
};

export const getAIAnswer = (question: string, lessonTitle: string, lessonContent: string): Promise<string> => {
    const prompt = `Você é um assistente teológico especialista em exposição bíblica. O aluno está estudando a lição "${lessonTitle}" cujo conteúdo é: """${lessonContent}""". Responda a seguinte pergunta de forma clara, útil e concisa, mantendo o foco no tópico da lição. Pergunta: "${question}"`;
    return callGemini(prompt);
};

export const deepenLessonTopic = (lessonTitle: string): Promise<string> => {
    const prompt = `Você é um professor de seminário. O aluno acabou de estudar a lição "${lessonTitle}". Forneça um insight adicional, um fato histórico relevante, ou uma conexão com outra passagem bíblica que aprofunde o entendimento do aluno sobre "${lessonTitle}". Apresente a informação em um parágrafo conciso e envolvente.`;
    return callGemini(prompt);
};

export const generatePracticeQuestions = (lessonContent: string): Promise<string> => {
    const prompt = `Você é um assistente de IA criando um quiz teológico. Baseado no conteúdo da lição abaixo, crie exatamente 2 questões de múltipla escolha com 4 opções cada (A, B, C, D). REGRAS: 1. Separe cada questão com uma linha em branco. 2. Apenas uma opção pode ser a correta. 3. A opção correta DEVE ser prefixada com o marcador 'CORRECT_ANSWER::'. Exemplo: 'CORRECT_ANSWER::B. A resposta correta'. 4. Não use nenhuma formatação markdown (negrito, itálico, etc.). Conteúdo da Lição: """${lessonContent}"""`;
    return callGemini(prompt);
};

export const generateSermonOutline = (passage: string): Promise<string> => {
    const prompt = `Você é um pregador experiente. Crie um esboço de sermão expositivo simples, com uma introdução, três pontos principais e uma conclusão, baseado na seguinte passagem bíblica: ${passage}. O esboço deve ser claro, prático e focar na ideia central do texto. Formate os títulos (Introdução, Pontos, Conclusão) com negrito (markdown).`;
    return callGemini(prompt);
};