export interface Question {
    question: string;
    options: string[];
    answer: string;
}

export interface Lesson {
    id: string;
    title: string;
    content: string;
    type?: 'lesson' | 'quiz' | 'generator';
    questions?: Question[];
}

export interface Course {
    id: string;
    title: string;
    description: string;
    lessons: Lesson[];
}

export interface CourseProgress {
    completedLessons: string[];
    quizScore: number | null;
    lastLesson?: string;
}

export interface Progress {
    [courseId: string]: CourseProgress;
}

export type Page = 'courses' | 'detail' | 'questionBank' | 'apolo' | 'dashboard';

export interface StandaloneQuestion {
    question: string;
    options: string[];
    answer: string;
    explanation: string;
    category?: string;
}

export interface QuestionCategory {
    id: string;
    name: string;
    questions: StandaloneQuestion[];
}

export interface ChatMessage {
    role: 'user' | 'model';
    parts: { text: string }[];
}

export interface QuestionHistoryItem {
    question: string;
    isCorrect: boolean;
}
