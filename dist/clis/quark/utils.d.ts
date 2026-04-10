import type { IPage } from '@jackwener/opencli/types';
export declare const SHARE_API = "https://drive-h.quark.cn/1/clouddrive/share/sharepage";
export declare const DRIVE_API = "https://drive-pc.quark.cn/1/clouddrive/file";
export declare const TASK_API = "https://drive-pc.quark.cn/1/clouddrive/task";
export interface ApiResponse<T = unknown> {
    status: number;
    code: number;
    message: string;
    data: T;
    metadata?: {
        _total?: number;
    };
}
export interface ShareFile {
    fid: string;
    file_name: string;
    size: number;
    dir: boolean;
    created_at: number;
    updated_at: number;
}
export interface DriveFile {
    fid: string;
    file_name: string;
    size: number;
    dir: boolean;
}
export declare function extractPwdId(url: string): string;
export declare function fetchJson<T = unknown>(page: IPage, url: string, options?: {
    method?: string;
    body?: object;
}): Promise<ApiResponse<T>>;
export declare function apiGet<T = unknown>(page: IPage, url: string): Promise<T>;
export declare function apiPost<T = unknown>(page: IPage, url: string, body: object): Promise<T>;
export declare function getToken(page: IPage, pwdId: string, passcode?: string): Promise<string>;
export declare function getShareList(page: IPage, pwdId: string, stoken: string, pdirFid?: string, options?: {
    sort?: string;
}): Promise<ShareFile[]>;
export declare function listMyDrive(page: IPage, pdirFid: string): Promise<DriveFile[]>;
export declare function findFolder(page: IPage, path: string): Promise<string>;
export declare function formatDate(ts: number): string;
export declare function formatSize(bytes: number): string;
export interface TaskStatus {
    status: number;
    save_as?: {
        save_as_sum_num: number;
    };
}
export declare function getTaskStatus(page: IPage, taskId: string): Promise<TaskStatus | null>;
export declare function pollTask(page: IPage, taskId: string, onDone?: (task: TaskStatus) => void, maxAttempts?: number, intervalMs?: number): Promise<boolean>;
