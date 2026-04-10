import type { IPage } from '@jackwener/opencli/types';
export declare const GEMINI_DOMAIN = "gemini.google.com";
export declare const GEMINI_APP_URL = "https://gemini.google.com/app";
export declare const GEMINI_DEEP_RESEARCH_DEFAULT_TOOL_LABELS: string[];
export declare const GEMINI_DEEP_RESEARCH_DEFAULT_CONFIRM_LABELS: string[];
export interface GeminiPageState {
    url: string;
    title: string;
    isSignedIn: boolean | null;
    composerLabel: string;
    canSend: boolean;
}
export interface GeminiTurn {
    Role: 'User' | 'Assistant' | 'System';
    Text: string;
}
export interface GeminiConversation {
    Title: string;
    Url: string;
}
export type GeminiTitleMatchMode = 'contains' | 'exact';
export interface GeminiSnapshot {
    url?: string;
    turns: GeminiTurn[];
    transcriptLines: string[];
    composerHasText: boolean;
    isGenerating: boolean;
    structuredTurnsTrusted: boolean;
}
export interface GeminiStructuredAppend {
    appendedTurns: GeminiTurn[];
    hasTrustedAppend: boolean;
    hasNewUserTurn: boolean;
    hasNewAssistantTurn: boolean;
}
export interface GeminiSubmissionBaseline {
    snapshot: GeminiSnapshot;
    preSendAssistantCount: number;
    userAnchorTurn: GeminiTurn | null;
    reason: 'user_turn' | 'composer_generating' | 'composer_transcript';
}
export declare function resolveGeminiLabels(value: unknown, fallback: string[]): string[];
export declare function parseGeminiPositiveInt(value: unknown, fallback: number): number;
export declare function parseGeminiTitleMatchMode(value: unknown, fallback?: GeminiTitleMatchMode): GeminiTitleMatchMode | null;
export declare function parseGeminiConversationUrl(value: unknown): string | null;
export declare function normalizeGeminiTitle(value: string): string;
export declare function pickGeminiConversationByTitle(conversations: GeminiConversation[], query: string, mode?: GeminiTitleMatchMode): GeminiConversation | null;
export declare function resolveGeminiConversationForQuery(conversations: GeminiConversation[], query: string, mode: GeminiTitleMatchMode): GeminiConversation | null;
export declare function sanitizeGeminiResponseText(value: string, promptText: string): string;
export declare function collectGeminiTranscriptAdditions(beforeLines: string[], currentLines: string[], promptText: string): string;
export declare function collapseAdjacentGeminiTurns(turns: GeminiTurn[]): GeminiTurn[];
declare function hasGeminiTurnPrefix(before: GeminiTurn[], current: GeminiTurn[]): boolean;
declare function diffTrustedStructuredTurns(before: GeminiSnapshot, current: GeminiSnapshot): GeminiStructuredAppend;
declare function diffTranscriptLines(before: GeminiSnapshot, current: GeminiSnapshot): string[];
declare function readGeminiSnapshotScript(): string;
declare function insertComposerTextFallbackScript(text: string): string;
declare function submitComposerScript(): string;
declare function clickNewChatScript(): string;
export declare function isOnGemini(page: IPage): Promise<boolean>;
export declare function ensureGeminiPage(page: IPage): Promise<void>;
export declare function getCurrentGeminiUrl(page: IPage): Promise<string>;
export declare function openGeminiToolsMenu(page: IPage): Promise<boolean>;
export declare function selectGeminiTool(page: IPage, labels: string[]): Promise<string>;
export declare function waitForGeminiConfirmButton(page: IPage, labels: string[], timeoutSeconds: number): Promise<string>;
export declare function getGeminiPageState(page: IPage): Promise<GeminiPageState>;
export declare function startNewGeminiChat(page: IPage): Promise<'clicked' | 'navigate'>;
export declare function getGeminiConversationList(page: IPage): Promise<GeminiConversation[]>;
export declare function clickGeminiConversationByTitle(page: IPage, query: string): Promise<boolean>;
export declare function getGeminiVisibleTurns(page: IPage): Promise<GeminiTurn[]>;
export declare function getGeminiTranscriptLines(page: IPage): Promise<string[]>;
export declare function waitForGeminiTranscript(page: IPage, attempts?: number): Promise<string[]>;
export declare function getLatestGeminiAssistantResponse(page: IPage): Promise<string>;
export declare function readGeminiSnapshot(page: IPage): Promise<GeminiSnapshot>;
export declare function waitForGeminiSubmission(page: IPage, before: GeminiSnapshot, timeoutSeconds: number): Promise<GeminiSubmissionBaseline | null>;
export declare function sendGeminiMessage(page: IPage, text: string): Promise<'button' | 'enter'>;
export interface GeminiDeepResearchExportResult {
    url: string;
    source: 'network' | 'window-open' | 'anchor' | 'performance' | 'blob' | 'tab' | 'none';
}
export declare function pickGeminiDeepResearchExportUrl(rawUrls: string[], currentUrl: string): GeminiDeepResearchExportResult;
export declare function exportGeminiDeepResearchReport(page: IPage, timeoutSeconds?: number): Promise<GeminiDeepResearchExportResult>;
export declare const __test__: {
    GEMINI_COMPOSER_SELECTORS: string[];
    GEMINI_COMPOSER_MARKER_ATTR: string;
    collapseAdjacentGeminiTurns: typeof collapseAdjacentGeminiTurns;
    clickNewChatScript: typeof clickNewChatScript;
    diffTranscriptLines: typeof diffTranscriptLines;
    diffTrustedStructuredTurns: typeof diffTrustedStructuredTurns;
    hasGeminiTurnPrefix: typeof hasGeminiTurnPrefix;
    readGeminiSnapshot: typeof readGeminiSnapshot;
    readGeminiSnapshotScript: typeof readGeminiSnapshotScript;
    submitComposerScript: typeof submitComposerScript;
    insertComposerTextFallbackScript: typeof insertComposerTextFallbackScript;
};
export declare function getGeminiVisibleImageUrls(page: IPage): Promise<string[]>;
export declare function waitForGeminiImages(page: IPage, beforeUrls: string[], timeoutSeconds: number): Promise<string[]>;
export interface GeminiImageAsset {
    url: string;
    dataUrl: string;
    mimeType: string;
    width: number;
    height: number;
}
export declare function exportGeminiImages(page: IPage, urls: string[]): Promise<GeminiImageAsset[]>;
export declare function waitForGeminiResponse(page: IPage, baseline: GeminiSubmissionBaseline, promptText: string, timeoutSeconds: number): Promise<string>;
export {};
