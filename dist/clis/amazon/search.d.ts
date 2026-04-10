interface SearchPayload {
    href?: string;
    cards?: Array<{
        asin?: string;
        title?: string;
        href?: string;
        price_text?: string | null;
        rating_text?: string | null;
        review_count_text?: string | null;
        sponsored?: boolean;
        badge_texts?: string[];
    }>;
}
declare function normalizeSearchCandidate(candidate: NonNullable<SearchPayload['cards']>[number], rank: number, sourceUrl: string): Record<string, unknown>;
export declare const __test__: {
    normalizeSearchCandidate: typeof normalizeSearchCandidate;
};
export {};
