import RenderContext from '../RenderContext.js';
export interface IRdenderOptions {
    context: RenderContext;
    value: any;
    label?: string;
    decoration?: string;
    color?: string;
    options?: any;
}
export default class Renderer {
    flags: Set<string>;
    themeName: string;
    constructor();
    getName(): string;
    getThemeName(): string;
    /**
    * truncate string to a certain length
    */
    truncate(input: string, len?: number): string;
    render({ context, value, label, decoration, color, options, }: IRdenderOptions): void;
    decorate(context: RenderContext, input: string, topic: string, color?: string): string;
}
//# sourceMappingURL=Renderer.d.ts.map