declare function resolveImagePath(imagePath: string): string;
declare function extractTweetId(url: string): string;
declare function buildReplyComposerUrl(url: string): string;
declare function resolveImageExtension(url: string, contentType: string | null): string;
declare function downloadRemoteImage(imageUrl: string): Promise<string>;
export declare const __test__: {
    buildReplyComposerUrl: typeof buildReplyComposerUrl;
    downloadRemoteImage: typeof downloadRemoteImage;
    extractTweetId: typeof extractTweetId;
    resolveImageExtension: typeof resolveImageExtension;
    resolveImagePath: typeof resolveImagePath;
};
export {};
