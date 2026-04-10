/**
 * Xiaohongshu note — read full note content from a public note page.
 *
 * Extracts title, author, description text, and engagement metrics
 * (likes, collects, comment count) via DOM extraction.
 *
 * Supports both bare note IDs and full URLs (with xsec_token).
 * Bare IDs now use /search_result/<id> which works without xsec_token
 * when the user is logged in via cookies.
 */
export {};
