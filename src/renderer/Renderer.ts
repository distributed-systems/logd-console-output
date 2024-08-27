import chalk from 'chalk';
import RenderContext from '../RenderContext.js';
import Decorator from '../themes/lib/Decorator.js';

export interface IRdenderOptions {
    context: RenderContext,
    value: any,
    label?: string,
    decoration?: string,
    color?: string,
    options?: any,
}


export default class Renderer {

    flags : Set<string>;
    themeName : string;


    constructor() {
        this.flags = new Set(['reset', 'bold', 'italic', 'inverse', 'underline', 'strikethrough', 'dim', 'hidden', 'visible']);
    }



    getName() {
        return 'renderer';
    }




    getThemeName() {
        return this.themeName || this.getName();
    }




    /**
    * truncate string to a certain length
    */
    truncate(input: string, len = 50) : string {
        if (input.length > len) {
            const truncateString = `\u2026`;

            return input.substring(0, len+truncateString.length)+truncateString;
        } else return input;
    }



    render({
        context,
        value,
        label,
        decoration,
        color,
        options,
    } : IRdenderOptions) {
        throw new Error('Not implemented');
    }





    decorate(context: RenderContext, input: string, topic: string, color?: string) {
        let loadedTheme = context.getThemeFor(this.getThemeName(), topic);
        
        const theme : { 
            [key: string]: boolean | string
        } = {};

        if (loadedTheme) loadedTheme.apply(theme);

        if (color) {
            color.split('.').filter((flag) => {
                if (this.flags.has(flag)) {
                    theme[flag] = true;
                    return false;
                } else return true;
            }).forEach((flag) => {
               if (flag.startsWith('bg')) theme.bg = flag[2].toLowerCase()+flag.substr(3);
               else theme.color = flag;
            });
        }

        if (theme.reset) input = chalk.reset(input);

        // @ts-ignore
        if (theme.color) input = chalk[theme.color](input);

        // @ts-ignore
        if (theme.bg) input = chalk[`bg${theme.bg[0].toUpperCase()}${theme.bg.substr(1)}`](input);
        
        if (theme.bold) input = chalk.bold(input);
        if (theme.italic) input = chalk.italic(input);
        if (theme.underline) input = chalk.underline(input);
        if (theme.inverse) input = chalk.inverse(input);
        if (theme.strikethrough) input = chalk.strikethrough(input);
        if (theme.dim) input = chalk.dim(input);
        if (theme.hidden) input = chalk.hidden(input);
        if (theme.visible) input = chalk.visible(input);

        return input;
    }
}