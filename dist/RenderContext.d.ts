import Renderer from './renderer/Renderer.js';
import Theme from './themes/lib/Theme.js';
import Decorator from './themes/lib/Decorator.js';
export interface RenderDecoration {
    label?: string;
    decoration?: string;
    close?: boolean;
}
export interface ICallsite {
    type: string;
    function: string;
    method: string;
    fileName: string;
    lineNumber: number;
    character: number;
    message?: string;
}
export default class RenderContext {
    indentation: number;
    renderers: Map<string, Renderer>;
    printer: Function;
    theme: Theme;
    level: number;
    lineBuffer: string;
    processedObjects: WeakSet<any>;
    maxArrayLength: number;
    maxStringLength: number;
    constructor({ indentation, renderers, printer, theme, }: {
        indentation?: number;
        renderers: Map<string, Renderer>;
        printer?: Function;
        theme: Theme;
    });
    /**
    * set options for rendering
    */
    setOptions({ maxArrayLength, maxStringLength, indentation, }?: {
        maxArrayLength?: number;
        maxStringLength?: number;
        indentation?: number;
    }): void;
    /**
    * render a lable fo a value
    */
    renderDecoration(value: RenderDecoration): void;
    /**
    * return a theme config for a given element
    */
    getThemeFor(element: string, decorator: string): Decorator;
    /**
    * render multiple values
    */
    render({ values, callsite, color, decoration, label, options, moduleName, }: {
        values: any[];
        callsite?: ICallsite;
        color?: string;
        decoration?: string;
        label?: string;
        options?: any;
        moduleName?: string;
    }): void;
    /**
    * renders a single value
    */
    renderValue({ value, color, decoration, label, options, }: {
        value: any;
        color?: string;
        decoration?: string;
        label?: string;
        options?: any;
    }): void;
    /**
    * set a custom printer function
    */
    setPrinter(printer?: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    }): this;
    /**
    * print to console
    */
    print(string: string): void;
    /**
    * print everything and start a new line
    */
    newLine(): void;
    /**
    * increases the level
    */
    in(): void;
    /**
    * decreses the level
    */
    out(): void;
    /**
    * returns the wihitespace that needs to be in front of items
    */
    getSpacing(): string;
}
//# sourceMappingURL=RenderContext.d.ts.map