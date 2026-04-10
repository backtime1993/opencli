interface OfferPayload {
    href?: string;
    title?: string;
    price_text?: string | null;
    merchant_info?: string | null;
    sold_by?: string | null;
    ships_from_text?: string | null;
    offer_link?: string | null;
    review_url?: string | null;
    qa_url?: string | null;
    buybox_text?: string | null;
}
declare function extractShipsFrom(text: string): string | null;
declare function extractSoldBy(text: string): string | null;
declare function isDeliveryLocationBlocked(text: string | null | undefined): boolean;
declare function normalizeOfferPayload(payload: OfferPayload): Record<string, unknown>;
export declare const __test__: {
    extractShipsFrom: typeof extractShipsFrom;
    extractSoldBy: typeof extractSoldBy;
    isDeliveryLocationBlocked: typeof isDeliveryLocationBlocked;
    normalizeOfferPayload: typeof normalizeOfferPayload;
};
export {};
