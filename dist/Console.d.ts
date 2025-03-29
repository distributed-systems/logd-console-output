import RenderContext from './RenderContext.js';
import Renderer from './renderer/Renderer.js';
import Theme from './themes/lib/Theme.js';
import LogMessage from './LogMessage.js';
export default class Console {
    renderers: Map<string, Renderer>;
    theme: Theme;
    constructor();
    /**
    * load all available renderers from the filesystem
    */
    private loadRenderers;
    /**
    * let the user set color themes
    */
    private setTheme;
    /**
    * creates a new render context which is
    * used to render a set of values
    */
    private createContext;
    /**
    * print any type of input to the console
    */
    log({ message, context, }: {
        message: LogMessage;
        context?: RenderContext;
    }): RenderContext;
}
//# sourceMappingURL=Console.d.ts.map