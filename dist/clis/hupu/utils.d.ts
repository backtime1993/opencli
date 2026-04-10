import type { IPage } from '@jackwener/opencli/types';
export interface HupuApiResponse {
    code?: number;
    msg?: string;
    message?: string;
}
export declare function stripHtml(html: string): string;
export declare function decodeHtmlEntities(html: string): string;
export declare function getHupuThreadUrl(tid: unknown): string;
export declare function getHupuSearchUrl(query: unknown, page: unknown, forum?: unknown, sort?: unknown): string;
export declare function readHupuNextData<T>(page: IPage, url: string, actionLabel: string, options?: {
    expectedTid?: string;
    timeoutMs?: number;
}): Promise<T>;
export declare function readHupuSearchData<T>(page: IPage, url: string, actionLabel: string): Promise<T>;
/**
 * Execute authenticated Hupu JSON requests inside the browser page so
 * cookies and the thread referer come from the live logged-in session.
 */
export declare function postHupuJson(page: IPage, tid: unknown, apiUrl: string, body: Record<string, unknown>, actionLabel: string, mode?: 'default' | 'reply'): Promise<HupuApiResponse>;
