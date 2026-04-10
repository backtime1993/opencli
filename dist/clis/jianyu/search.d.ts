import { dedupeCandidates, normalizeDate } from './shared/china-bid-search.js';
interface JianyuSearchRow {
    title: string;
    url: string;
    date?: string;
    contextText?: string;
}
export declare function buildSearchUrl(query: string): string;
declare function siteSearchCandidates(query: string): string[];
declare function filterNavigationRows(query: string, items: Array<{
    title?: string;
    url?: string;
    date?: string;
    contextText?: string;
}>): Array<{
    title: string;
    url: string;
    date?: string;
    contextText?: string;
}>;
declare function extractDateFromJianyuUrl(rawUrl: string): string;
declare function normalizeApiRow(item: unknown): {
    title: string;
    url: string;
    date?: string;
    contextText?: string;
} | null;
declare function parseSearchIndexMarkdown(markdown: string): Array<{
    title: string;
    url: string;
}>;
declare function unwrapDuckDuckGoUrl(rawUrl: string): string;
declare function fetchJianyuApiRows(page: any, query: string, limit: number): Promise<{
    rows: JianyuSearchRow[];
    challenge: boolean;
}>;
declare function collectApiRowsFromResponses(responses: unknown[]): JianyuSearchRow[];
export declare const __test__: {
    buildSearchCandidates: typeof siteSearchCandidates;
    buildSearchUrl: typeof buildSearchUrl;
    normalizeDate: typeof normalizeDate;
    dedupeCandidates: typeof dedupeCandidates;
    filterNavigationRows: typeof filterNavigationRows;
    parseSearchIndexMarkdown: typeof parseSearchIndexMarkdown;
    unwrapDuckDuckGoUrl: typeof unwrapDuckDuckGoUrl;
    extractDateFromJianyuUrl: typeof extractDateFromJianyuUrl;
    normalizeApiRow: typeof normalizeApiRow;
    fetchJianyuApiRows: typeof fetchJianyuApiRows;
    collectApiRowsFromResponses: typeof collectApiRowsFromResponses;
};
export {};
