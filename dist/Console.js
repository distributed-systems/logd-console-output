import RenderContext from './RenderContext.js';
import DefaultDark from './themes/DefaultDark.js';
import * as renderers from './renderer/index.js';
export default class Console {
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
            const Constructor = Renderer;
            const instance = new Constructor();
            this.renderers.set(instance.getName(), instance);
        }
    }
    /**
    * let the user set color themes
    */
    setTheme(theme) {
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
    log({ values, context = this.createContext(), options, callsite, color, moduleName, }) {
        if (options)
            context.setOptions(options);
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
//# sourceMappingURL=Console.js.map