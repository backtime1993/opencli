export type ZhihuTarget = {
    kind: 'user';
    slug: string;
    url: string;
} | {
    kind: 'question';
    id: string;
    url: string;
} | {
    kind: 'answer';
    questionId: string;
    id: string;
    url: string;
} | {
    kind: 'article';
    id: string;
    url: string;
};
export declare function parseTarget(input: string): ZhihuTarget;
export declare function assertAllowedKinds(command: string, target: ZhihuTarget): ZhihuTarget;
export declare const __test__: {
    parseTarget: typeof parseTarget;
    assertAllowedKinds: typeof assertAllowedKinds;
};
