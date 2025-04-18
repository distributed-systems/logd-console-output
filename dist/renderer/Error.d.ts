import Renderer, { IRdenderOptions } from './Renderer.js';
export declare class ErrorRenderer extends Renderer {
    errorProperties: string[];
    constructor();
    getName(): string;
    render({ context, value, label, decoration, }: IRdenderOptions): void;
    /**
    * truncate string to a certain length
    */
    private truncateLeft;
    /**
    * pad strings do that they have a given length
    */
    private pad;
    /**
    * truncate paths so that the part of the projects
    * directory is removed
    */
    private truncatePath;
}
//# sourceMappingURL=Error.d.ts.map