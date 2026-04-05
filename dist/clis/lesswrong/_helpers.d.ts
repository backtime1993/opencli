export declare const SITE = "lesswrong";
export declare const DOMAIN = "www.lesswrong.com";
export declare function gqlRequest(query: string): Promise<any>;
export declare function gqlEscape(str: string): string;
export declare function stripHtml(html: string): string;
export declare function daysAgo(n: number): string;
export declare function resolveTagId(slug: string): Promise<{
    _id: string;
    name: string;
} | null>;
export declare function resolveUserId(slug: string): Promise<{
    _id: string;
    displayName: string;
}>;
export declare function parsePostId(urlOrId: string): string;
