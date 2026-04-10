import { type MediaItem } from '@jackwener/opencli/download/media-download';
import { extractAssetsForInput } from './assets.js';
declare function extFromUrl(url: string, fallback: string): string;
declare function toDownloadItems(offerId: string, assets: Awaited<ReturnType<typeof extractAssetsForInput>>): MediaItem[];
export declare const __test__: {
    extFromUrl: typeof extFromUrl;
    toDownloadItems: typeof toDownloadItems;
};
export {};
