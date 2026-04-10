interface LinuxDoTopicPost {
    post_number?: number;
    username?: string;
    raw?: string;
    cooked?: string;
    like_count?: number;
    created_at?: string;
}
interface LinuxDoTopicPayload {
    title?: string;
    post_stream?: {
        posts?: LinuxDoTopicPost[];
    };
}
interface TopicContentRow {
    content: string;
}
declare function toLocalTime(utcStr: string): string;
declare function normalizeTopicPayload(payload: unknown): LinuxDoTopicPayload | null;
declare function buildTopicMarkdownDocument(params: {
    title: string;
    author: string;
    likes?: number;
    createdAt: string;
    url: string;
    body: string;
}): string;
declare function extractTopicContent(payload: unknown, id: number): TopicContentRow;
export declare const __test__: {
    buildTopicMarkdownDocument: typeof buildTopicMarkdownDocument;
    extractTopicContent: typeof extractTopicContent;
    normalizeTopicPayload: typeof normalizeTopicPayload;
    toLocalTime: typeof toLocalTime;
};
export {};
