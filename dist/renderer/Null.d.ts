import Renderer, { IRdenderOptions } from './Renderer.js';
export default class NullRenderer extends Renderer {
    getName(): string;
    render({ context, value, label, decoration, color, }: IRdenderOptions): void;
}
//# sourceMappingURL=Null.d.ts.map