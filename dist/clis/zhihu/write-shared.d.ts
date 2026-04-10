import { readFile } from 'node:fs/promises';
import type { IPage } from '@jackwener/opencli/types';
type FileStatLike = {
    isFile(): boolean;
};
type FileReaderDeps = {
    readFile: typeof readFile;
    stat: (path: string) => Promise<FileStatLike>;
    decodeUtf8: (raw: Buffer) => string;
};
type IdentityRootLike = {
    querySelectorAll(selector: string): ArrayLike<unknown>;
};
export declare function resolveCurrentUserSlugFromDom(state: unknown, documentRoot: IdentityRootLike): string | null;
export declare function requireExecute(kwargs: Record<string, unknown>): void;
export declare function resolvePayload(kwargs: Record<string, unknown>, deps?: FileReaderDeps): Promise<string>;
export declare function resolveCurrentUserIdentity(page: Pick<IPage, 'evaluate'>): Promise<string>;
export declare function buildResultRow(message: string, targetType: string, target: string, outcome: 'applied' | 'already_applied' | 'created', extra?: Record<string, unknown>): {
    status: string;
    outcome: "created" | "applied" | "already_applied";
    message: string;
    target_type: string;
    target: string;
}[];
export declare const __test__: {
    requireExecute: typeof requireExecute;
    resolvePayload: typeof resolvePayload;
    resolveCurrentUserIdentity: typeof resolveCurrentUserIdentity;
    resolveCurrentUserSlugFromDom: typeof resolveCurrentUserSlugFromDom;
    buildResultRow: typeof buildResultRow;
};
export {};
