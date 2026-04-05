/**
 * CLI entry point: registers built-in commands and wires up Commander.
 *
 * Built-in commands are registered inline here (list, validate, explore, etc.).
 * Dynamic adapter commands are registered via commanderAdapter.ts.
 */
import { Command } from 'commander';
export declare function createProgram(BUILTIN_CLIS: string, USER_CLIS: string): Command;
export declare function runCli(BUILTIN_CLIS: string, USER_CLIS: string): void;
export interface OperateVerifyInvocation {
    binary: string;
    args: string[];
    cwd: string;
    shell?: boolean;
}
export declare function findPackageRoot(startFile: string, fileExists?: (path: string) => boolean): string;
export declare function resolveOperateVerifyInvocation(opts?: {
    projectRoot?: string;
    platform?: NodeJS.Platform;
    fileExists?: (path: string) => boolean;
    readFile?: (path: string) => string;
}): OperateVerifyInvocation;
