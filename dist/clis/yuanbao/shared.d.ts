import type { IPage } from '@jackwener/opencli/types';
import { AuthRequiredError } from '@jackwener/opencli/errors';
export declare const YUANBAO_DOMAIN = "yuanbao.tencent.com";
export declare const YUANBAO_URL = "https://yuanbao.tencent.com/";
/**
 * Reusable visibility check for injected browser scripts.
 * Embed in page.evaluate strings via `${IS_VISIBLE_JS}`.
 */
export declare const IS_VISIBLE_JS = "const isVisible = (node) => {\n  if (!(node instanceof HTMLElement)) return false;\n  const rect = node.getBoundingClientRect();\n  const style = window.getComputedStyle(node);\n  return rect.width > 0\n    && rect.height > 0\n    && style.display !== 'none'\n    && style.visibility !== 'hidden';\n};";
export declare function authRequired(message: string): AuthRequiredError;
export declare function isOnYuanbao(page: IPage): Promise<boolean>;
export declare function ensureYuanbaoPage(page: IPage): Promise<void>;
export declare function hasLoginGate(page: IPage): Promise<boolean>;
