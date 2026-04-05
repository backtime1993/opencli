interface DiscussionPayload {
    href?: string;
    title?: string;
    average_rating_text?: string | null;
    total_review_count_text?: string | null;
    qa_links?: string[];
    review_samples?: Array<{
        title?: string | null;
        rating_text?: string | null;
        author?: string | null;
        date_text?: string | null;
        body?: string | null;
        verified?: boolean;
    }>;
}
declare function normalizeDiscussionPayload(payload: DiscussionPayload): Record<string, unknown>;
export declare const __test__: {
    normalizeDiscussionPayload: typeof normalizeDiscussionPayload;
};
export {};
