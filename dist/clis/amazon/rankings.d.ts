import { type CliOptions } from '@jackwener/opencli/registry';
import { type AmazonRankingListType } from './shared.js';
export interface RankingCardPayload {
    rank_text?: string | null;
    asin?: string | null;
    title?: string | null;
    href?: string | null;
    price_text?: string | null;
    rating_text?: string | null;
    review_count_text?: string | null;
    card_text?: string | null;
}
interface RankingPagePayload {
    href?: string;
    title?: string;
    list_title?: string;
    category_title?: string;
    category_path?: string[];
    cards?: RankingCardPayload[];
    page_links?: string[];
    visible_category_links?: Array<{
        title?: string | null;
        url?: string | null;
        node_id?: string | null;
    }>;
}
interface RankingCommandDefinition {
    commandName: string;
    listType: AmazonRankingListType;
    description: string;
}
interface RankingNormalizeContext {
    listType: AmazonRankingListType;
    rankFallback: number;
    listTitle: string | null;
    sourceUrl: string;
    categoryTitle: string | null;
    categoryUrl: string | null;
    categoryPath: string[];
    visibleCategoryLinks: Array<{
        title: string;
        url: string;
        node_id: string | null;
    }>;
}
declare function parseRank(rawRank: string | null | undefined, fallback: number): number;
declare function normalizeVisibleCategoryLinks(links: RankingPagePayload['visible_category_links']): Array<{
    title: string;
    url: string;
    node_id: string | null;
}>;
export declare function normalizeRankingCandidate(candidate: RankingCardPayload, context: RankingNormalizeContext): Record<string, unknown>;
export declare function createRankingCliOptions(definition: RankingCommandDefinition): CliOptions;
export declare const __test__: {
    parseRank: typeof parseRank;
    normalizeVisibleCategoryLinks: typeof normalizeVisibleCategoryLinks;
    normalizeRankingCandidate: typeof normalizeRankingCandidate;
};
export {};
