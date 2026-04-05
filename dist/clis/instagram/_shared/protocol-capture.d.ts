import type { IPage } from '../../../src/types.js';
export interface InstagramProtocolCaptureEntry {
    kind: 'fetch' | 'xhr';
    url: string;
    method: string;
    requestHeaders?: Record<string, string>;
    requestBodyKind?: string;
    requestBodyPreview?: string;
    responseStatus?: number;
    responseContentType?: string;
    responsePreview?: string;
    timestamp: number;
}
export declare function buildInstallInstagramProtocolCaptureJs(captureVar?: string, captureErrorsVar?: string): string;
export declare function buildReadInstagramProtocolCaptureJs(captureVar?: string, captureErrorsVar?: string): string;
export declare function installInstagramProtocolCapture(page: IPage): Promise<void>;
export declare function readInstagramProtocolCapture(page: IPage): Promise<{
    data: InstagramProtocolCaptureEntry[];
    errors: string[];
}>;
export declare function dumpInstagramProtocolCaptureIfEnabled(page: IPage): Promise<void>;
export declare function instagramPrivateApiFetch(page: IPage, input: string | URL, init?: {
    method?: 'GET' | 'POST';
    headers?: Record<string, string>;
    body?: unknown;
}): Promise<Response>;
