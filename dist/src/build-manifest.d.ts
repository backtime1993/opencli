#!/usr/bin/env node
/**
 * Build-time CLI manifest compiler.
 *
 * Scans all TS CLI definitions and pre-compiles them into a single
 * manifest.json for instant cold-start registration.
 *
 * Usage: npx tsx src/build-manifest.ts
 * Output: cli-manifest.json at the package root
 */
export interface ManifestEntry {
    site: string;
    name: string;
    aliases?: string[];
    description: string;
    domain?: string;
    strategy: string;
    browser: boolean;
    args: Array<{
        name: string;
        type?: string;
        default?: unknown;
        required?: boolean;
        valueRequired?: boolean;
        positional?: boolean;
        help?: string;
        choices?: string[];
    }>;
    columns?: string[];
    pipeline?: Record<string, unknown>[];
    timeout?: number;
    deprecated?: boolean | string;
    replacedBy?: string;
    type: 'ts';
    /** Relative path from clis/ dir, e.g. 'bilibili/search.js' */
    modulePath?: string;
    /** Relative path to the original source file from clis/ dir (e.g. 'site/cmd.ts') */
    sourceFile?: string;
    /** Pre-navigation control — see CliCommand.navigateBefore */
    navigateBefore?: boolean | string;
}
export declare function loadTsManifestEntries(filePath: string, site: string, importer?: (moduleHref: string) => Promise<unknown>): Promise<ManifestEntry[]>;
export declare function buildManifest(): Promise<ManifestEntry[]>;
