/**
 * Shared Weibo utilities — uid extraction.
 */
import type { IPage } from '../../src/types.js';
/** Get the currently logged-in user's uid from Vue store or config API. */
export declare function getSelfUid(page: IPage): Promise<string>;
