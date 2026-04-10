import { type ProcurementSearchCandidateRaw, cleanText, normalizeDate } from './procurement-contract.js';
export type BidSearchCandidate = ProcurementSearchCandidateRaw;
export { cleanText, normalizeDate };
export declare function dedupeCandidates(items: BidSearchCandidate[]): BidSearchCandidate[];
export declare function buildSearchCandidates(query: string, baseEntries: string[], queryKeys?: string[]): string[];
export declare function detectAuthPrompt(page: any): Promise<boolean>;
export declare function searchRowsFromEntries(page: any, { query, candidateUrls, allowedHostFragments, limit, }: {
    query: string;
    candidateUrls: string[];
    allowedHostFragments: string[];
    limit: number;
}): Promise<BidSearchCandidate[]>;
