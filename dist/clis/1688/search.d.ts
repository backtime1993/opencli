interface SearchPayload {
    href?: string;
    title?: string;
    bodyText?: string;
    next_url?: string;
    candidates?: Array<{
        item_url?: string;
        title?: string;
        container_text?: string;
        desc_rows?: string[];
        price_text?: string | null;
        sales_text?: string | null;
        hover_price_text?: string | null;
        moq_text?: string | null;
        tag_items?: string[];
        hover_items?: string[];
        seller_name?: string | null;
        seller_url?: string | null;
    }>;
}
interface SearchRow {
    rank: number;
    offer_id: string | null;
    member_id: string | null;
    shop_id: string | null;
    title: string | null;
    item_url: string | null;
    seller_name: string | null;
    seller_url: string | null;
    price_text: string | null;
    price_min: number | null;
    price_max: number | null;
    currency: string | null;
    moq_text: string | null;
    moq_value: number | null;
    location: string | null;
    badges: string[];
    sales_text: string | null;
    return_rate_text: string | null;
    source_url: string;
    fetched_at: string;
    strategy: string;
}
declare function normalizeSearchCandidate(candidate: NonNullable<SearchPayload['candidates']>[number], sourceUrl: string): SearchRow;
declare function extractMoqText(text: string | null | undefined): string;
declare function extractSalesText(text: string | null | undefined): string;
declare function firstWord(text: string): string;
declare function buildDedupeKey(row: Pick<SearchRow, 'offer_id' | 'item_url'>): string | null;
export declare const __test__: {
    normalizeSearchCandidate: typeof normalizeSearchCandidate;
    extractMoqText: typeof extractMoqText;
    extractSalesText: typeof extractSalesText;
    firstWord: typeof firstWord;
    buildDedupeKey: typeof buildDedupeKey;
};
export {};
