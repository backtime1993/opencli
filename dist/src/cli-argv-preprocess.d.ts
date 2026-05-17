/**
 * argv preprocessing: rewrite `opencli browser <session> <subcommand> ...`
 * into `opencli browser --session <session> <subcommand> ...` so commander
 * (which can't combine a parent positional with subcommand dispatch) can parse it.
 *
 * The user-facing form is positional; the internal form uses --session. Help text
 * for the `browser` command is overridden to advertise the positional form.
 */
/**
 * Returns the set of reserved subcommand names (exposed for tests so they stay
 * synced with the actual registrations in cli.ts).
 */
export declare function getBrowserSubcommandNames(): ReadonlySet<string>;
/**
 * Rewrite `argv` to convert the positional `<session>` after `browser`
 * into the internal `--session <name>` flag form.
 *
 * Only acts when `browser` is the root command (i.e. the first non-flag token
 * after any leading root options), so it can't mis-interpret occurrences of
 * the literal word `browser` deeper in the argv (e.g. `opencli adapter init
 * browser/x`, or a URL value containing `browser`).
 *
 * Leaves argv unchanged when:
 *   - root command is not `browser`
 *   - the token after `browser` is a flag (e.g. `--help`)
 *   - the token after `browser` is a known subcommand name (session was
 *     omitted; commander will surface its own required-flag error)
 */
export declare function rewriteBrowserArgv(argv: readonly string[]): string[];
/**
 * Thrown by the preprocessor when user argv uses a retired/old form that we
 * intentionally refuse to accept. main.ts catches this and exits with a
 * usage error so it does not bubble up as an internal stacktrace.
 */
export declare class BrowserSessionArgvError extends Error {
    constructor(message: string);
}
