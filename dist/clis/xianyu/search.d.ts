declare function normalizeLimit(value: unknown): number;
declare function buildSearchUrl(query: string): string;
declare function itemIdFromUrl(url: string): string;
export declare const __test__: {
    MAX_LIMIT: number;
    normalizeLimit: typeof normalizeLimit;
    buildSearchUrl: typeof buildSearchUrl;
    itemIdFromUrl: typeof itemIdFromUrl;
};
export {};
