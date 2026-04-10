interface ProductPayload {
    href?: string;
    title?: string;
    product_title?: string | null;
    byline?: string | null;
    price_text?: string | null;
    rating_text?: string | null;
    review_count_text?: string | null;
    review_url?: string | null;
    qa_url?: string | null;
    bullets?: string[];
    breadcrumbs?: string[];
}
declare function normalizeProductPayload(payload: ProductPayload): Record<string, unknown>;
export declare const __test__: {
    normalizeProductPayload: typeof normalizeProductPayload;
};
export {};
