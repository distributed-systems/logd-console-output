import RenderContext from './RenderContext.js';
import DefaultDark from './themes/DefaultDark.js';
import * as renderers from './renderer/index.js';
export default class Console {
    renderers;
    theme;
    colors = new Map([
        ['debug', 'grey'],
        ['notice', 'grey'],
        ['info', 'white'],
        ['warn', 'yellow.bold'],
        ['error', 'red.bold'],
        ['success', 'green.bold'],
        ['highlight', 'cyan.bold'],
        ['wtf', 'magenta.bold.bgWhite'],
        ['default', 'blue.bold'],
    ]);
    options = {
        truncate: 2000,
    };
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
    log({ message, context = this.createContext(), }) {
        let callsite;
        if (message.hasCallsite()) {
            const reference = message.getCallsite();
            let type = '';
            let method = '';
            let functionName = '';
            if (reference.functionName && reference.functionName.includes('.')) {
                type = reference.functionName.split('.')[0];
                method = reference.functionName.split('.')[1];
            }
            else {
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
        const color = this.colors.get(message.getLogLevel().level) ?? this.colors.get('default');
        const options = this.options;
        // render all values
        context.render({
            values: message.getValues(),
            callsite,
            moduleName: message.getModuleName(),
            color,
            options,
        });
        // return the context to the user
        return context;
    }
}
//# sourceMappingURL=Console.js.map