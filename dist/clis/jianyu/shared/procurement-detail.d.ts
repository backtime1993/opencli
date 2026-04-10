import { type IPage } from '@jackwener/opencli/types';
export declare function runProcurementDetail(page: IPage, { url, site, query, }: {
    url: string;
    site: string;
    query?: string;
}): Promise<import("./procurement-contract.js").ProcurementDetailRecord[]>;
