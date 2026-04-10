/**
 * Shared utilities for CLI adapters.
 */
/**
 * Clamp a numeric value to [min, max].
 * Matches the signature of lodash.clamp and Rust's clamp.
 */
export declare function clamp(value: number, min: number, max: number): number;
export declare function clampInt(raw: unknown, fallback: number, min: number, max: number): number;
export declare function normalizeNumericId(value: unknown, label: string, example: string): string;
export declare function requireNonEmptyQuery(value: unknown, label?: string): string;
