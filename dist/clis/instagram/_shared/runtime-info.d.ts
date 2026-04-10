import type { IPage } from '@jackwener/opencli/types';
export interface InstagramRuntimeInfo {
    appId: string;
    csrfToken: string;
    instagramAjax: string;
}
export declare function extractInstagramRuntimeInfo(html: string): InstagramRuntimeInfo;
export declare function buildReadInstagramRuntimeInfoJs(): string;
export declare function resolveInstagramRuntimeInfo(page: IPage): Promise<InstagramRuntimeInfo>;
