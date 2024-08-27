import Renderer, { IRdenderOptions } from './Renderer.js';
export default class StringRenderer extends Renderer {
    getName(): string;
    render({ context, value, label, decoration, color, options, }: IRdenderOptions): void;
}
//# sourceMappingURL=String.d.ts.map