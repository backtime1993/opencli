import type { IPage } from '@jackwener/opencli/types';
import { type MediaSource } from './shared.js';
interface AssetBrowserPayload {
    href?: string;
    title?: string;
    offerTitle?: string;
    offerId?: string | number;
    gallery?: {
        mainImage?: string[];
        offerImgList?: string[];
        wlImageInfos?: Array<{
            fullPathImageURI?: string;
        }>;
        [key: string]: unknown;
    };
    scannedAssets?: MediaSource[];
}
export interface Normalized1688Assets {
    offer_id: string | null;
    title: string | null;
    item_url: string;
    main_images: string[];
    sku_images: string[];
    detail_images: string[];
    videos: string[];
    other_images: string[];
    raw_assets: MediaSource[];
    source: string[];
    main_count: number;
    sku_count: number;
    detail_count: number;
    video_count: number;
    source_url: string;
    fetched_at: string;
    strategy: string;
}
declare function normalizeAssets(payload: AssetBrowserPayload): Normalized1688Assets;
export declare function extractAssetsForInput(page: IPage, input: string): Promise<Normalized1688Assets>;
export declare const __test__: {
    normalizeAssets: typeof normalizeAssets;
};
export {};
