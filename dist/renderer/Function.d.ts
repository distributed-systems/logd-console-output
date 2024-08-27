import Renderer, { IRdenderOptions } from './Renderer.js';
export default class FunctionRenderer extends Renderer {
    getName(): string;
    render({ context, value, label, decoration, options, }: IRdenderOptions): void;
    /**
    * remove common whitespace in front of
    * of all lines
    */
    truncateWhiteSpace(lines: string[]): string[];
}
//# sourceMappingURL=Function.d.ts.map