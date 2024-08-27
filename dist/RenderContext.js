import types from 'ee-types';
export default class RenderContext {
    constructor({ indentation, renderers, printer = console.log, theme, }) {
        if (theme.indentation)
            this.indentation = theme.indentation;
        if (indentation)
            this.indentation = indentation;
        this.renderers = renderers;
        this.printer = printer;
        this.theme = theme;
        // how many indentation levels are we in?
        this.level = 0;
        // buffer everything until a linebreak is reached
        this.lineBuffer = '';
        // don't print anything twice, store refernces to all objects
        // so that this can be prevents
        this.processedObjects = new WeakSet();
    }
    /**
    * set options for rendering
    */
    setOptions({ maxArrayLength, maxStringLength, indentation, } = {}) {
        if (maxArrayLength)
            this.maxArrayLength = maxArrayLength;
        if (maxStringLength)
            this.maxStringLength = maxStringLength;
        if (indentation)
            this.indentation = indentation;
    }
    /**
    * render a lable fo a value
    */
    renderDecoration(value) {
        if (!this.renderers.has('decoration'))
            throw new Error(`No decoration renderer present!`);
        this.renderers.get('decoration').render({
            context: this,
            value: value,
        });
    }
    /**
    * return a theme config for a given element
    */
    getThemeFor(element, decorator) {
        if (!this.theme)
            throw new Error(`No theme set on the reenderContext!`);
        if (!this.theme.hasType(element))
            throw new Error(`The '${this.theme.name}' theme doesn't contain a definition for the element '${element}'!`);
        if (!this.theme.getType(element).hasDecorator(decorator))
            throw new Error(`The '${this.theme.name}' theme doesn't contain a definition for the decorator '${decorator}' of the element '${element}'!`);
        return this.theme.getType(element).getDecorator(decorator);
    }
    /**
    * render multiple values
    */
    render({ values, callsite, color, decoration, label, options, moduleName, }) {
        if (callsite) {
            if (!this.renderers.has('callsite'))
                throw new Error(`No callsite renderer present!`);
            this.renderers.get('callsite').render({
                context: this,
                value: callsite,
            });
        }
        if (moduleName) {
            if (!this.renderers.has('moduleName'))
                throw new Error(`No moduleName renderer present!`);
            this.renderers.get('moduleName').render({
                context: this,
                value: moduleName,
            });
        }
        values.forEach((value) => {
            this.renderValue({
                value,
                decoration,
                label,
                color,
                options,
            });
            this.newLine();
        });
    }
    /**
    * renders a single value
    */
    renderValue({ value, color, decoration, label, options = {}, }) {
        // make sure no objects is rendered twice
        if (typeof value === 'object' && value !== null) {
            if (this.processedObjects.has(value)) {
                if (!this.renderers.has('recursion'))
                    throw new Error(`No recursion renderer present!`);
                this.renderers.get('recursion').render({
                    context: this,
                    decoration,
                    label,
                    value: `<circular value ${types(value)}>`,
                });
                return;
            }
            else
                this.processedObjects.add(value);
        }
        let valueType;
        // allow custom renderer assignments
        if (types.object(value) && value.__logd_custom_renderer) {
            valueType = value.__logd_custom_renderer;
        }
        else {
            valueType = types(value);
        }
        if (this.renderers.has(valueType)) {
            if (!this.renderers.has(valueType))
                throw new Error(`No renderer present for the type '${valueType}'!`);
            const renderer = this.renderers.get(valueType);
            renderer.render({
                context: this,
                value,
                decoration,
                label,
                color,
                options,
            });
        }
        else {
            if (!this.renderers.has('error'))
                throw new Error(`No error renderer present!`);
            // just render an error
            this.renderers.get('error').render({
                context: this,
                decoration,
                label,
                value: new Error(`logd console renderer: no render for the type '${valueType}' found! Please file an issue on github https://github.com/distributed-systems/logd-console-output`)
            });
        }
    }
    /**
    * set a custom printer function
    */
    setPrinter(printer = console.log) {
        this.printer = printer;
        return this;
    }
    /**
    * print to console
    */
    print(string) {
        this.lineBuffer += string;
    }
    /**
    * print everything and start a new line
    */
    newLine() {
        this.printer(this.lineBuffer);
        this.lineBuffer = this.getSpacing();
    }
    /**
    * increases the level
    */
    in() {
        this.level++;
    }
    /**
    * decreses the level
    */
    out() {
        this.level--;
    }
    /**
    * returns the wihitespace that needs to be in front of items
    */
    getSpacing() {
        return ' '.repeat(this.indentation * this.level);
    }
}
//# sourceMappingURL=RenderContext.js.map