import { ChatMessage } from "../types";

// Função unificada para chamar nosso backend
async function callBackend(task: string, payload: any): Promise<string> {
    try {
        const response = await fetch('/api/gemini', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ task, payload }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `Backend API error: ${response.statusText}`);
        }

        const result = await response.json();
        return result.text || '';
    } catch (error) {
        console.error(`Error calling backend for task ${task}:`, error);
        return `<p class="text-red-600">Ocorreu um erro ao contatar o servidor. Detalhes: ${error instanceof Error ? error.message : String(error)}</p>`;
    }
}


function formatResponse(text: string, isChat: boolean = false): string {
    if (!text) return '';
    
    let html = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    html = html.replace(/^\* (.*$)/gm, '<li>$1</li>');
    html = html.replace(/^\d+\. (.*$)/gm, '<li>$1</li>');
    html = html.replace(/(<\/li>\n<li>)/g, '</li><li>');

    const wrapInList = (listContent: string, listType: 'ul' | 'ol') => `<${listType}>${listContent}</${listType}>`;

    if (html.includes('<li>')) {
         if (isChat) {
            html = html.replace(/(<li>.*<\/li>)/gs, (match) => wrapInList(match, 'ul'));
        } else {
            const isOrdered = /^\d+\./m.test(text);
            html = html.replace(/(<li>.*<\/li>)/gs, (match) => wrapInList(match, isOrdered ? 'ol' : 'ul'));
        }
    }

    html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');
    
    html = html.replace(/\n/g, '<br>');
    html = html.replace(/<br>\s*<(ul|ol|li|h2|h3)>/g, '<$1>');
    html = html.replace(/<\/(ul|ol|li|h2|h3)>\s*<br>/g, '</$1>');
    
    return html;
}

export const getApoloResponse = async (history: ChatMessage[], newMessage: string): Promise<string> => {
    const text = await callBackend('getApoloResponse', { history, newMessage });
    return formatResponse(text, true);
};

export const getPassageExplanation = async (passage: string): Promise<string> => {
    const text = await callBackend('getPassageExplanation', { passage });
    return formatResponse(text);
};

export const getRelatedPassages = async (passage: string): Promise<string> => {
    const text = await callBackend('getRelatedPassages', { passage });
    return formatResponse(text);
};

export const getAIAnswer = async (question: string, lessonTitle: string, lessonContent: string): Promise<string> => {
    const text = await callBackend('getAIAnswer', { question, lessonTitle, lessonContent });
    return formatResponse(text);
};

export const deepenLessonTopic = async (lessonTitle: string): Promise<string> => {
    const text = await callBackend('deepenLessonTopic', { lessonTitle });
    return formatResponse(text);
};

export const generatePracticeQuestions = async (lessonContent: string): Promise<string> => {
    return callBackend('generatePracticeQuestions', { lessonContent });
};

export const generateSermonOutline = async (passage: string): Promise<string> => {
    const text = await callBackend('generateSermonOutline', { passage });
    return formatResponse(text);
};
