import Renderer, { IRdenderOptions } from './Renderer.js';
export default class ErrorRenderer extends Renderer {
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
}
//# sourceMappingURL=LogdError.d.ts.map