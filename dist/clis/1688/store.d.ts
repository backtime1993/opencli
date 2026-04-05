interface StoreBrowserPayload {
    href?: string;
    title?: string;
    bodyText?: string;
    offerLinks?: string[];
    contactLinks?: string[];
}
interface StoreItemSeed {
    href?: string;
    bodyText?: string;
    seller?: {
        companyName?: string;
        memberId?: string;
        winportUrl?: string;
        sellerWinportUrlMap?: Record<string, string>;
    };
    services?: Array<{
        serviceName?: string;
    }>;
}
declare function normalizeStorePayload(input: {
    resolvedUrl: string;
    storePayload: StoreBrowserPayload | null;
    contactPayload: StoreBrowserPayload | null;
    seed: StoreItemSeed | null;
    explicitMemberId: string | null;
}): Record<string, unknown>;
declare function safeCanonicalStoreUrl(url: string): string | null;
declare function buildContactUrl(storeUrl: string): string | null;
declare function firstNamedLine(text: string): string | null;
declare function firstMetric(text: string, labels: string[]): string | null;
declare function extractReturnRate(text: string): string | null;
declare function firstOfferId(links: string[]): string | null;
declare function firstContactUrl(links: string[]): string | null;
export declare const __test__: {
    normalizeStorePayload: typeof normalizeStorePayload;
    safeCanonicalStoreUrl: typeof safeCanonicalStoreUrl;
    buildContactUrl: typeof buildContactUrl;
    firstNamedLine: typeof firstNamedLine;
    firstMetric: typeof firstMetric;
    extractReturnRate: typeof extractReturnRate;
    firstOfferId: typeof firstOfferId;
    firstContactUrl: typeof firstContactUrl;
};
export {};
