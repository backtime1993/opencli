/**
 * HTTP client for communicating with the opencli daemon.
 *
 * Provides a typed send() function that posts a Command and returns a Result.
 */
import type { BrowserSessionInfo } from '../types.js';
export interface DaemonCommand {
    id: string;
    action: 'exec' | 'navigate' | 'tabs' | 'cookies' | 'screenshot' | 'close-window' | 'sessions' | 'set-file-input' | 'insert-text' | 'bind-current' | 'network-capture-start' | 'network-capture-read' | 'cdp';
    tabId?: number;
    code?: string;
    workspace?: string;
    url?: string;
    op?: string;
    index?: number;
    domain?: string;
    matchDomain?: string;
    matchPathPrefix?: string;
    format?: 'png' | 'jpeg';
    quality?: number;
    fullPage?: boolean;
    /** Local file paths for set-file-input action */
    files?: string[];
    /** CSS selector for file input element (set-file-input action) */
    selector?: string;
    /** Raw text payload for insert-text action */
    text?: string;
    /** URL substring filter pattern for network capture */
    pattern?: string;
    cdpMethod?: string;
    cdpParams?: Record<string, unknown>;
}
export interface DaemonResult {
    id: string;
    ok: boolean;
    data?: unknown;
    error?: string;
}
export interface DaemonStatus {
    ok: boolean;
    pid: number;
    uptime: number;
    extensionConnected: boolean;
    extensionVersion?: string;
    pending: number;
    lastCliRequestTime: number;
    memoryMB: number;
    port: number;
}
export declare function fetchDaemonStatus(opts?: {
    timeout?: number;
}): Promise<DaemonStatus | null>;
export declare function requestDaemonShutdown(opts?: {
    timeout?: number;
}): Promise<boolean>;
/**
 * Check if daemon is running.
 */
export declare function isDaemonRunning(): Promise<boolean>;
/**
 * Check if daemon is running AND the extension is connected.
 */
export declare function isExtensionConnected(): Promise<boolean>;
/**
 * Send a command to the daemon and wait for a result.
 * Retries up to 4 times: network errors retry at 500ms,
 * transient extension errors retry at 1500ms.
 */
export declare function sendCommand(action: DaemonCommand['action'], params?: Omit<DaemonCommand, 'id' | 'action'>): Promise<unknown>;
export declare function listSessions(): Promise<BrowserSessionInfo[]>;
export declare function bindCurrentTab(workspace: string, opts?: {
    matchDomain?: string;
    matchPathPrefix?: string;
}): Promise<unknown>;
