import Renderer, { IRdenderOptions } from './Renderer.js';
export default class BufferRenderer extends Renderer {
    getName(): string;
    render({ context, value, label, decoration, color, }: IRdenderOptions): void;
}
//# sourceMappingURL=Buffer.d.ts.map