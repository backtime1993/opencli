import type { IPage } from '../../../src/types.js';
import type { InstagramProtocolCaptureEntry } from './protocol-capture.js';
export { buildReadInstagramRuntimeInfoJs, extractInstagramRuntimeInfo, type InstagramRuntimeInfo, resolveInstagramRuntimeInfo, } from './runtime-info.js';
export interface InstagramPrivateApiContext {
    asbdId: string;
    csrfToken: string;
    igAppId: string;
    igWwwClaim: string;
    instagramAjax: string;
    webSessionId: string;
}
export interface InstagramImageAsset {
    filePath: string;
    fileName: string;
    mimeType: string;
    width: number;
    height: number;
    byteLength: number;
    bytes: Buffer;
}
export interface PreparedInstagramImageAsset extends InstagramImageAsset {
    cleanupPath?: string;
}
export type InstagramMediaKind = 'image' | 'video';
export interface InstagramMediaItem {
    type: InstagramMediaKind;
    filePath: string;
}
export interface InstagramVideoAsset {
    filePath: string;
    fileName: string;
    mimeType: string;
    width: number;
    height: number;
    durationMs: number;
    byteLength: number;
    bytes: Buffer;
    coverImage: PreparedInstagramImageAsset;
    cleanupPaths?: string[];
}
export type PreparedInstagramMediaAsset = {
    type: 'image';
    asset: PreparedInstagramImageAsset;
} | {
    type: 'video';
    asset: InstagramVideoAsset;
};
type StoryPayloadInput = {
    uploadId: string;
    width: number;
    height: number;
    now?: () => number;
    jazoest: string;
};
type StoryVideoPayloadInput = StoryPayloadInput & {
    durationMs: number;
};
type PrivateApiFetchInit = {
    method?: string;
    headers?: Record<string, string>;
    body?: unknown;
};
type PrivateApiFetchLike = (url: string | URL, init?: PrivateApiFetchInit) => Promise<Response>;
export declare function derivePrivateApiContextFromCapture(entries: InstagramProtocolCaptureEntry[]): InstagramPrivateApiContext | null;
export declare function deriveInstagramJazoest(value: string): string;
export declare function resolveInstagramPrivatePublishConfig(page: IPage): Promise<{
    apiContext: InstagramPrivateApiContext;
    jazoest: string;
}>;
export declare function buildConfigureBody(input: {
    uploadId: string;
    caption: string;
    jazoest: string;
}): string;
export declare function buildConfigureSidecarPayload(input: {
    uploadIds: string[];
    caption: string;
    clientSidecarId: string;
    jazoest: string;
}): Record<string, unknown>;
export declare function readImageAsset(filePath: string): InstagramImageAsset;
export declare function isInstagramFeedAspectRatioAllowed(width: number, height: number): boolean;
export declare function getInstagramFeedNormalizedDimensions(width: number, height: number): {
    width: number;
    height: number;
} | null;
export declare function isInstagramStoryAspectRatioAllowed(width: number, height: number): boolean;
export declare function getInstagramStoryNormalizedDimensions(width: number, height: number): {
    width: number;
    height: number;
} | null;
export declare function prepareImageAssetForPrivateUpload(filePath: string): PreparedInstagramImageAsset;
export declare function prepareImageAssetForPrivateStoryUpload(filePath: string): PreparedInstagramImageAsset;
export declare function readVideoAsset(filePath: string): InstagramVideoAsset;
export declare function buildConfigureToStoryPhotoPayload(input: StoryPayloadInput): Record<string, unknown>;
export declare function buildConfigureToStoryVideoPayload(input: StoryVideoPayloadInput): Record<string, unknown>;
export declare function publishMediaViaPrivateApi(input: {
    page: unknown;
    mediaItems: InstagramMediaItem[];
    caption: string;
    apiContext: InstagramPrivateApiContext;
    jazoest: string;
    now?: () => number;
    fetcher?: PrivateApiFetchLike;
    prepareMediaAsset?: (item: InstagramMediaItem) => PreparedInstagramMediaAsset | Promise<PreparedInstagramMediaAsset>;
    waitMs?: (ms: number) => Promise<void>;
}): Promise<{
    code?: string;
    uploadIds: string[];
}>;
export declare function publishImagesViaPrivateApi(input: {
    page: unknown;
    imagePaths: string[];
    caption: string;
    apiContext: InstagramPrivateApiContext;
    jazoest: string;
    now?: () => number;
    fetcher?: PrivateApiFetchLike;
    prepareAsset?: (filePath: string) => PreparedInstagramImageAsset | Promise<PreparedInstagramImageAsset>;
    waitMs?: (ms: number) => Promise<void>;
}): Promise<{
    code?: string;
    uploadIds: string[];
}>;
export declare function publishStoryViaPrivateApi(input: {
    page: unknown;
    mediaItem: InstagramMediaItem;
    content: string;
    apiContext: InstagramPrivateApiContext;
    jazoest: string;
    currentUserId?: string;
    now?: () => number;
    fetcher?: PrivateApiFetchLike;
    prepareMediaAsset?: (item: InstagramMediaItem) => PreparedInstagramMediaAsset | Promise<PreparedInstagramMediaAsset>;
}): Promise<{
    mediaPk?: string;
    uploadId: string;
}>;
