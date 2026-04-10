import type { IPage } from '@jackwener/opencli/types';
export declare const SITE = "1688";
export declare const HOME_URL = "https://www.1688.com/";
export declare const SEARCH_URL_PREFIX = "https://s.1688.com/selloffer/offer_search.htm?charset=utf8&keywords=";
export declare const DETAIL_URL_PREFIX = "https://detail.1688.com/offer/";
export declare const STORE_MOBILE_URL_PREFIX = "https://winport.m.1688.com/page/index.html?memberId=";
export declare const STRATEGY = "cookie";
export declare const SEARCH_LIMIT_DEFAULT = 20;
export declare const SEARCH_LIMIT_MAX = 100;
export declare const FACTORY_BADGE_PATTERNS: string[];
export declare const SERVICE_BADGE_PATTERNS: string[];
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
export interface PriceRange {
    price_text: string;
    price_min: number | null;
    price_max: number | null;
    currency: string | null;
}
export interface MoqValue {
    moq_text: string;
    moq_value: number | null;
}
export interface PriceTier {
    quantity_text: string;
    quantity_min: number | null;
    price_text: string;
    price: number | null;
    currency: string | null;
}
export interface SearchCandidate {
    item_url: string;
    title: string;
    container_text: string;
    seller_name: string | null;
    seller_url: string | null;
}
export interface MediaSource {
    type: 'image' | 'video';
    group: 'main' | 'sku' | 'detail' | 'video' | 'unknown';
    url: string;
    source?: string;
}
export declare function cleanText(value: unknown): string;
export declare function cleanMultilineText(value: unknown): string;
export declare function uniqueNonEmpty(values: Array<string | null | undefined>): string[];
export declare function parseSearchLimit(input: unknown): number;
export declare function buildSearchUrl(query: string): string;
export declare function buildDetailUrl(input: string): string;
export declare function resolveStoreUrl(input: string): string;
export declare function canonicalizeStoreUrl(input: string): string;
export declare function canonicalizeItemUrl(input: string): string | null;
export declare function canonicalizeSellerUrl(input: string): string | null;
export declare function extractOfferId(input: string): string | null;
export declare function extractMemberId(input: string): string | null;
export declare function extractShopId(input: string): string | null;
export declare function buildProvenance(sourceUrl: string): ProvenanceFields;
export declare function parsePriceText(text: string): PriceRange;
export declare function normalizePriceTiers(rawTiers: Array<{
    beginAmount?: unknown;
    price?: unknown;
}>, unit: string | null): PriceTier[];
export declare function parseMoqText(text: string): MoqValue;
export declare function extractLocation(text: string): string | null;
export declare function extractAddress(text: string): string | null;
export declare function extractMetric(text: string, label: string): string | null;
export declare function extractYearsOnPlatform(text: string): string | null;
export declare function extractMainBusiness(text: string): string | null;
export declare function extractBadges(text: string, candidates: string[]): string[];
export declare function guessTopCategories(text: string): string[];
export declare function isCaptchaState(state: Partial<PageState>): boolean;
export declare function isLoginState(state: Partial<PageState>): boolean;
export declare function buildCaptchaHint(action: string): string;
export declare function readPageState(page: IPage): Promise<PageState>;
export declare function gotoAndReadState(page: IPage, url: string, settleMs?: number, action?: string): Promise<PageState>;
export declare function ensure1688Session(page: IPage): Promise<void>;
export declare function assertAuthenticatedState(state: PageState, action: string): void;
export declare function assertNotCaptcha(state: PageState, action: string): void;
export declare function toNumber(value: unknown): number | null;
export declare function limitCandidates<T>(values: T[], limit: number): T[];
export declare function normalizeMediaUrl(input: unknown): string;
export declare function uniqueMediaSources(values: MediaSource[]): MediaSource[];
export declare const __test__: {
    SEARCH_LIMIT_DEFAULT: number;
    SEARCH_LIMIT_MAX: number;
    parseSearchLimit: typeof parseSearchLimit;
    buildSearchUrl: typeof buildSearchUrl;
    buildDetailUrl: typeof buildDetailUrl;
    resolveStoreUrl: typeof resolveStoreUrl;
    canonicalizeStoreUrl: typeof canonicalizeStoreUrl;
    canonicalizeItemUrl: typeof canonicalizeItemUrl;
    canonicalizeSellerUrl: typeof canonicalizeSellerUrl;
    extractOfferId: typeof extractOfferId;
    extractMemberId: typeof extractMemberId;
    extractShopId: typeof extractShopId;
    parsePriceText: typeof parsePriceText;
    normalizePriceTiers: typeof normalizePriceTiers;
    parseMoqText: typeof parseMoqText;
    extractLocation: typeof extractLocation;
    extractAddress: typeof extractAddress;
    extractMetric: typeof extractMetric;
    extractYearsOnPlatform: typeof extractYearsOnPlatform;
    extractMainBusiness: typeof extractMainBusiness;
    extractBadges: typeof extractBadges;
    guessTopCategories: typeof guessTopCategories;
    isCaptchaState: typeof isCaptchaState;
    isLoginState: typeof isLoginState;
    cleanText: typeof cleanText;
    cleanMultilineText: typeof cleanMultilineText;
    uniqueNonEmpty: typeof uniqueNonEmpty;
    normalizeMediaUrl: typeof normalizeMediaUrl;
    uniqueMediaSources: typeof uniqueMediaSources;
    limitCandidates: typeof limitCandidates;
};
