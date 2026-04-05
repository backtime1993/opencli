/**
 * CLI discovery: finds YAML/TS CLI definitions and registers them.
 *
 * Supports two modes:
 * 1. FAST PATH (manifest): If a pre-compiled cli-manifest.json exists,
 *    registers all YAML commands instantly without runtime YAML parsing.
 *    TS modules are loaded lazily only when their command is executed.
 * 2. FALLBACK (filesystem scan): Traditional runtime discovery for development.
 */
/** User runtime directory: ~/.opencli */
export declare const USER_OPENCLI_DIR: string;
/** User CLIs directory: ~/.opencli/clis */
export declare const USER_CLIS_DIR: string;
/** Plugins directory: ~/.opencli/plugins/ */
export declare const PLUGINS_DIR: string;
/**
 * Create runtime shim files under ~/.opencli so user CLIs can keep
 * importing ../../registry(.js), ../../errors(.js), etc.
 *
 * Adapters use relative imports like `../../registry.js` which, from
 * ~/.opencli/clis/<site>/<cmd>.js, resolve to ~/.opencli/registry.js.
 * We create shim files that re-export from the installed opencli runtime.
 */
export declare function ensureUserCliCompatShims(baseDir?: string): Promise<void>;
/**
 * First-run fallback: if postinstall was skipped (--ignore-scripts) or failed,
 * trigger adapter fetch on first CLI invocation when ~/.opencli/clis/ is empty.
 */
export declare function ensureUserAdapters(): Promise<void>;
/**
 * Discover and register CLI commands.
 * Uses pre-compiled manifest when available for instant startup.
 */
export declare function discoverClis(...dirs: string[]): Promise<void>;
/**
 * Discover and register plugins from ~/.opencli/plugins/.
 * Each subdirectory is treated as a plugin (site = directory name).
 * Files inside are scanned flat (no nested site subdirs).
 */
export declare function discoverPlugins(): Promise<void>;
