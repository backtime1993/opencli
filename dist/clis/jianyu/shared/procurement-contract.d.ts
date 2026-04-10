export type ProcurementContentType = 'notice' | 'result' | 'news' | 'navigation' | 'unknown';
export type ProcurementTaxonomy = 'network_dns' | 'relay_unavailable' | 'selector_drift' | 'timeout' | 'empty_result' | 'extraction_drift';
export interface ProcurementSearchCandidateRaw {
    title: string;
    url: string;
    date?: string;
    contextText?: string;
}
interface ProcurementCoreRecord {
    title: string;
    url: string;
    date: string;
    publish_time: string;
    source_site: string;
    is_detail_page: boolean;
    content_type: ProcurementContentType;
    project_owner: string;
    project_code: string;
    budget_or_limit: string;
    deadline_or_open_time: string;
    snippet: string;
    summary: string;
    quality_flags: string[];
}
export interface ProcurementSearchRecord extends ProcurementCoreRecord {
    rank: number;
}
export interface ProcurementDetailRecord extends ProcurementCoreRecord {
    detail_text: string;
    evidence_blocks: string[];
}
export declare function cleanText(value: unknown): string;
export declare function normalizeDate(raw: string): string;
declare function splitEvidenceBlocks(text: string, query: string): string[];
declare function classifyContentType(title: string, url: string, contextText: string): ProcurementContentType;
declare function isDetailPage(url: string): boolean;
declare function qualityRejectReason(core: ProcurementCoreRecord, query: string): string | null;
export declare function formatTaxonomyError(taxonomy: ProcurementTaxonomy, { site, command, detail, }: {
    site: string;
    command: 'search' | 'detail';
    detail: string;
}): string;
export declare function taxonomyError(taxonomy: ProcurementTaxonomy, context: {
    site: string;
    command: 'search' | 'detail';
    detail: string;
}): Error;
export declare function toProcurementSearchRecords(rows: ProcurementSearchCandidateRaw[], { site, query, limit, }: {
    site: string;
    query: string;
    limit: number;
}): ProcurementSearchRecord[];
export declare function toProcurementDetailRecord({ title, url, contextText, publishTime, }: {
    title: string;
    url: string;
    contextText: string;
    publishTime?: string;
}, { site, query, }: {
    site: string;
    query?: string;
}): ProcurementDetailRecord;
export declare const __test__: {
    classifyContentType: typeof classifyContentType;
    isDetailPage: typeof isDetailPage;
    splitEvidenceBlocks: typeof splitEvidenceBlocks;
    qualityRejectReason: typeof qualityRejectReason;
};
export {};
