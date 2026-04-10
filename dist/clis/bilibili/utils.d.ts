/**
 * Bilibili shared helpers: WBI signing, authenticated fetch, nav data, UID resolution.
 */
import type { IPage } from '@jackwener/opencli/types';
/**
 * Resolve Bilibili short URL / short code to BV ID.
 * Supports: BV1MV9NBtENN, XYzsqGa, b23.tv/XYzsqGa, https://b23.tv/XYzsqGa
 */
export declare function resolveBvid(input: unknown): Promise<string>;
export declare function stripHtml(s: string): string;
export declare function payloadData(payload: any): any;
export declare function wbiSign(page: IPage, params: Record<string, any>): Promise<Record<string, string>>;
export declare function apiGet(page: IPage, path: string, opts?: {
    params?: Record<string, any>;
    signed?: boolean;
}): Promise<any>;
export declare function fetchJson(page: IPage, url: string): Promise<any>;
export declare function getSelfUid(page: IPage): Promise<string>;
export declare function resolveUid(page: IPage, input: string): Promise<string>;
