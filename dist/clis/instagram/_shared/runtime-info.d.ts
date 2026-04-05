import type { IPage } from '../../../src/types.js';
export interface InstagramRuntimeInfo {
    appId: string;
    csrfToken: string;
    instagramAjax: string;
}
export declare function extractInstagramRuntimeInfo(html: string): InstagramRuntimeInfo;
export declare function buildReadInstagramRuntimeInfoJs(): string;
export declare function resolveInstagramRuntimeInfo(page: IPage): Promise<InstagramRuntimeInfo>;
