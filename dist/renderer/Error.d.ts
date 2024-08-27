import Renderer, { IRdenderOptions } from './Renderer.js';
export declare class ErrorRenderer extends Renderer {
    errorProperties: string[];
    constructor();
    getName(): string;
    render({ context, value, label, decoration, }: IRdenderOptions): void;
    /**
    * truncate string to a certain length
    */
    truncateLeft(input: string, len?: number): string;
    /**
    * pad strings do that they have a given length
    */
    pad(input: string, len?: number, right?: boolean): string;
    /**
    * analyze the frames of the stack
    */
    analyzeFrames(frames: string[]): ({
        fn: string | null;
        alias: string | null;
        path: string;
        line: string | null;
        character: string | null;
        text?: undefined;
    } | {
        text: string;
        fn?: undefined;
        alias?: undefined;
        path?: undefined;
        line?: undefined;
        character?: undefined;
    })[];
    /**
    * truncate paths so that the part of the projects
    * directory is removed
    */
    truncatePath(filepath?: string): string;
    /**
    * convert the stack to an array containing strings
    */
    convertStack(err: Error): any[] | undefined;
}
//# sourceMappingURL=Error.d.ts.map