interface BuyerProtectionModel {
    serviceName?: string;
    shortBuyerDesc?: string;
    packageBuyerDesc?: string;
    textDesc?: string;
    agreeDeliveryHours?: number;
}
interface ItemBrowserPayload {
    href?: string;
    title?: string;
    bodyText?: string;
    offerTitle?: string;
    offerId?: string | number;
    seller?: {
        companyName?: string;
        memberId?: string;
        winportUrl?: string;
        sellerWinportUrlMap?: Record<string, string>;
    };
    trade?: {
        beginAmount?: string | number;
        priceDisplay?: string;
        unit?: string;
        saleCount?: string | number;
        offerIDatacenterSellInfo?: Record<string, unknown>;
        offerPriceModel?: {
            currentPrices?: Array<{
                beginAmount?: string | number;
                price?: string | number;
            }>;
        };
    };
    gallery?: {
        mainImage?: string[];
        offerImgList?: string[];
        wlImageInfos?: Array<{
            fullPathImageURI?: string;
        }>;
    };
    shipping?: {
        deliveryLimitText?: string;
        logisticsText?: string;
        protectionInfos?: BuyerProtectionModel[];
        buyerProtectionModel?: BuyerProtectionModel[];
    };
    services?: BuyerProtectionModel[];
}
interface VisibleAttribute {
    key: string;
    value: string;
}
declare function normalizeItemPayload(payload: ItemBrowserPayload): Record<string, unknown>;
declare function normalizeVisibleAttributes(raw: unknown): VisibleAttribute[];
declare function stripAlibabaSuffix(title: string | undefined): string;
declare function extractMoqText(bodyText: string, beginAmount: string | number | undefined, unit: string): string;
declare function extractDeliveryDaysText(bodyText: string, services: BuyerProtectionModel[], shipping: ItemBrowserPayload['shipping']): string | null;
declare function extractKeywordLine(bodyText: string, keywords: string[]): string | null;
declare function extractSalesText(bodyText: string): string | null;
declare function extractStockQuantity(bodyText: string): number | null;
export declare const __test__: {
    normalizeItemPayload: typeof normalizeItemPayload;
    normalizeVisibleAttributes: typeof normalizeVisibleAttributes;
    stripAlibabaSuffix: typeof stripAlibabaSuffix;
    extractMoqText: typeof extractMoqText;
    extractDeliveryDaysText: typeof extractDeliveryDaysText;
    extractKeywordLine: typeof extractKeywordLine;
    extractSalesText: typeof extractSalesText;
    extractStockQuantity: typeof extractStockQuantity;
};
export {};
