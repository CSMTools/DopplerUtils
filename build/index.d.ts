export declare const DopplerData: {
    [key: string]: {
        [key: number]: {
            name: string;
            color: string;
        };
    };
};
export declare const DopplerIndexes: number[];
export declare function isDoppler(paintIndex: number): boolean;
export declare function getDopplerType(paintIndex: number): string;
