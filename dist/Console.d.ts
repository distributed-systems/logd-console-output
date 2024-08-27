import RenderContext, { ICallsite } from './RenderContext.js';
import Renderer from './renderer/Renderer.js';
import Theme from './themes/lib/Theme.js';
export default class Console {
    renderers: Map<string, Renderer>;
    theme: Theme;
    constructor();
    /**
    * load all available renderers from the filesystem
    */
    loadRenderers(): void;
    /**
    * let the user set color themes
    */
    setTheme(theme: Theme): void;
    /**
    * creates a new render context which is
    * used to render a set of values
    */
    createContext(): RenderContext;
    /**
    * print any type of input to the console
    */
    log({ values, context, options, callsite, color, moduleName, }: {
        values: any[];
        context?: RenderContext;
        options?: any;
        callsite?: ICallsite;
        color?: string;
        moduleName?: string;
    }): RenderContext;
}
//# sourceMappingURL=Console.d.ts.map