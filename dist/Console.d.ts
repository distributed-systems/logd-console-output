import RenderContext from './RenderContext.js';
import { LogMessage } from 'logd';
export default class Console {
    private renderers;
    private theme;
    private readonly colors;
    private readonly options;
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