import { isOnYuanbao } from './shared.js';
declare function normalizeBooleanFlag(value: unknown, fallback: boolean): boolean;
export declare function convertYuanbaoHtmlToMarkdown(value: string): string;
export declare function sanitizeYuanbaoResponseText(value: string, promptText: string): string;
export declare function collectYuanbaoTranscriptAdditions(beforeLines: string[], currentLines: string[], promptText: string): string;
export declare function pickLatestYuanbaoAssistantCandidate(messages: string[], baselineCount: number, promptText: string): string;
export declare function updateStableState(previousText: string, stableCount: number, nextText: string): {
    previousText: string;
    stableCount: number;
};
export declare const askCommand: import("../../src/registry.js").CliCommand;
export declare const __test__: {
    collectYuanbaoTranscriptAdditions: typeof collectYuanbaoTranscriptAdditions;
    convertYuanbaoHtmlToMarkdown: typeof convertYuanbaoHtmlToMarkdown;
    isOnYuanbao: typeof isOnYuanbao;
    normalizeBooleanFlag: typeof normalizeBooleanFlag;
    pickLatestYuanbaoAssistantCandidate: typeof pickLatestYuanbaoAssistantCandidate;
    sanitizeYuanbaoResponseText: typeof sanitizeYuanbaoResponseText;
    updateStableState: typeof updateStableState;
};
export {};
