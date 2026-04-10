import type { IPage } from '@jackwener/opencli/types';
/**
 * Fetch a xueqiu JSON API from inside the browser context (credentials included).
 * Page must already be navigated to xueqiu.com before calling this function.
 * Throws CliError on HTTP errors; otherwise returns the parsed JSON.
 */
export declare function fetchXueqiuJson(page: IPage, url: string): Promise<any>;
