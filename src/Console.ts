import RenderContext, { ICallsite } from './RenderContext.js';
import Renderer from './renderer/Renderer.js';
import DefaultDark from './themes/DefaultDark.js';
import * as renderers  from './renderer/index.js';
import Theme from './themes/lib/Theme.js';
import LogMessage from './LogMessage.js';


export default class Console {

    renderers: Map<string, Renderer>;
    theme: Theme;

    constructor() {
        this.renderers = new Map();
        this.loadRenderers();

        // use the default theme for black consoles
        this.setTheme(new DefaultDark());
    }





    /**
    * load all available renderers from the filesystem
    */
    private loadRenderers() {
        for (const Renderer of Object.values(renderers)) {
            const Constructor = Renderer as any;
            const instance = new Constructor();
            this.renderers.set(instance.getName(), instance);
        }
    }





    /**
    * let the user set color themes
    */
    private setTheme(theme: Theme) {
        this.theme = theme;
    }





    /**
    * creates a new render context which is
    * used to render a set of values
    */
    private createContext() {
        const context = new RenderContext({
            renderers: this.renderers,
            theme: this.theme,
        });

        return context;
    }





    /**
    * print any type of input to the console
    */
    public log({
        message,
        context = this.createContext(),
    }: {
        message: LogMessage,
        context?: RenderContext,
    }) {

        let callsite: ICallsite | undefined;

        if (message.hasCallsite()) {
            const reference = message.getCallsite()!;
            let type = '';
            let method = '';
            let functionName = '';

            if (reference.functionName && reference.functionName.includes('.')) {
                type = reference.functionName.split('.')[0];
                method = reference.functionName.split('.')[1];
            } else {
                functionName = reference.functionName ?? '';
            }

            callsite = {
                type: type,
                function: functionName,
                method: method,
                fileName: reference.fileName ?? '',
                lineNumber: reference.lineNumber ?? 0,
                character: reference.columnNumber ?? 0,
            };
        }

        // render all values
        context.render({
            values: message.getValues(),
            callsite,
            moduleName: message.getModuleName(),
        });
        
        // return the context to the user
        return context;
    }
}