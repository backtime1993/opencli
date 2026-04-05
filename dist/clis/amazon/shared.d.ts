import type { IPage } from '../../src/types.js';
export declare const SITE = "amazon";
export declare const DOMAIN = "amazon.com";
export declare const HOME_URL = "https://www.amazon.com/";
export declare const BESTSELLERS_URL = "https://www.amazon.com/Best-Sellers/zgbs";
export declare const NEW_RELEASES_URL = "https://www.amazon.com/gp/new-releases";
export declare const MOVERS_SHAKERS_URL = "https://www.amazon.com/gp/movers-and-shakers";
export declare const SEARCH_URL_PREFIX = "https://www.amazon.com/s?k=";
export declare const PRODUCT_URL_PREFIX = "https://www.amazon.com/dp/";
export declare const DISCUSSION_URL_PREFIX = "https://www.amazon.com/product-reviews/";
export declare const STRATEGY = "cookie";
export declare const PRIMARY_PRICE_SELECTORS: string[];
export type AmazonRankingListType = 'bestsellers' | 'new_releases' | 'movers_shakers';
export interface ProvenanceFields {
    source_url: string;
    fetched_at: string;
    strategy: string;
}
export interface PageState {
    href: string;
    title: string;
    body_text: string;
}
export interface PriceValue {
    price_text: string | null;
    price_value: number | null;
    currency: string | null;
}
export declare function cleanText(value: unknown): string;
export declare function cleanMultilineText(value: unknown): string;
export declare function uniqueNonEmpty(values: Array<string | null | undefined>): string[];
export declare function buildProvenance(sourceUrl: string): ProvenanceFields;
export declare function buildSearchUrl(query: string): string;
export declare function extractAsin(input: string): string | null;
export declare function buildProductUrl(input: string): string;
export declare function buildDiscussionUrl(input: string): string;
export declare function isSupportedRankingPath(listType: AmazonRankingListType, inputUrl: string): boolean;
export declare function resolveRankingUrl(listType: AmazonRankingListType, input?: string): string;
export declare function isRankingPaginationUrl(listType: AmazonRankingListType, inputUrl: string): boolean;
export declare function extractCategoryNodeId(inputUrl: string | null | undefined): string | null;
export declare function resolveBestsellersUrl(input?: string): string;
export declare function canonicalizeAmazonUrl(input: string): string;
export declare function toAbsoluteAmazonUrl(value: string | null | undefined): string | null;
export declare function normalizeProductUrl(value: string | null | undefined): string | null;
export declare function parsePriceText(text: string | null | undefined): PriceValue;
export declare function parseRatingValue(text: string | null | undefined): number | null;
export declare function parseReviewCount(text: string | null | undefined): number | null;
export declare function extractReviewCountFromCardText(text: string | null | undefined): string | null;
export declare function isAmazonEntity(text: string | null | undefined): boolean;
export declare function firstMeaningfulLine(text: string | null | undefined): string;
export declare function trimRatingPrefix(text: string | null | undefined): string | null;
export declare function isRobotState(state: Partial<PageState>): boolean;
export declare function buildChallengeHint(action: string): string;
export declare function readPageState(page: IPage): Promise<PageState>;
export declare function gotoAndReadState(page: IPage, url: string, settleMs?: number, action?: string): Promise<PageState>;
export declare function assertUsableState(state: PageState, action: string): void;
export declare const __test__: {
    buildSearchUrl: typeof buildSearchUrl;
    extractAsin: typeof extractAsin;
    buildProductUrl: typeof buildProductUrl;
    buildDiscussionUrl: typeof buildDiscussionUrl;
    resolveBestsellersUrl: typeof resolveBestsellersUrl;
    resolveRankingUrl: typeof resolveRankingUrl;
    isSupportedRankingPath: typeof isSupportedRankingPath;
    isRankingPaginationUrl: typeof isRankingPaginationUrl;
    extractCategoryNodeId: typeof extractCategoryNodeId;
    parsePriceText: typeof parsePriceText;
    parseRatingValue: typeof parseRatingValue;
    parseReviewCount: typeof parseReviewCount;
    extractReviewCountFromCardText: typeof extractReviewCountFromCardText;
    isAmazonEntity: typeof isAmazonEntity;
    trimRatingPrefix: typeof trimRatingPrefix;
    isRobotState: typeof isRobotState;
    PRIMARY_PRICE_SELECTORS: string[];
};
