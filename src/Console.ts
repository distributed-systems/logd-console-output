import RenderContext, { ICallsite } from './RenderContext.js';
import Renderer from './renderer/Renderer.js';
import DefaultDark from './themes/DefaultDark.js';
import * as renderers  from './renderer/index.js';
import Theme from './themes/lib/Theme.js';



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
    loadRenderers() {
        for (const Renderer of Object.values(renderers)) {
            const Constructor = Renderer as any;
            const instance = new Constructor();
            this.renderers.set(instance.getName(), instance);
        }
    }





    /**
    * let the user set color themes
    */
    setTheme(theme: Theme) {
        this.theme = theme;
    }





    /**
    * creates a new render context which is
    * used to render a set of values
    */
    createContext() {
        const context = new RenderContext({
            renderers: this.renderers,
            theme: this.theme,
        });

        return context;
    }





    /**
    * print any type of input to the console
    */
    log({
        values,
        context = this.createContext(),
        options,
        callsite,
        color,
        moduleName,
    }: {
        values: any[],
        context?: RenderContext,
        options?: any,
        callsite?: ICallsite,
        color?: string,
        moduleName?: string,
    }) {
        if (options) context.setOptions(options);
        
        // render all values
        context.render({
            values,
            callsite,
            color,
            options,
            moduleName,
        });
        
        // return the context to the user
        return context;
    }
}