import chalk from 'chalk';
export default class Renderer {
    flags;
    themeName;
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
    truncate(input, len = 50) {
        if (input.length > len) {
            const truncateString = `\u2026`;
            return input.substring(0, len + truncateString.length) + truncateString;
        }
        else
            return input;
    }
    render({ context, value, label, decoration, color, options, }) {
        throw new Error('Not implemented');
    }
    decorate(context, input, topic, color) {
        let loadedTheme = context.getThemeFor(this.getThemeName(), topic);
        const theme = {};
        if (loadedTheme)
            loadedTheme.apply(theme);
        if (color) {
            color.split('.').filter((flag) => {
                if (this.flags.has(flag)) {
                    theme[flag] = true;
                    return false;
                }
                else
                    return true;
            }).forEach((flag) => {
                if (flag.startsWith('bg'))
                    theme.bg = flag[2].toLowerCase() + flag.substr(3);
                else
                    theme.color = flag;
            });
        }
        if (theme.reset)
            input = chalk.reset(input);
        // @ts-ignore
        if (theme.color)
            input = chalk[theme.color](input);
        // @ts-ignore
        if (theme.bg)
            input = chalk[`bg${theme.bg[0].toUpperCase()}${theme.bg.substr(1)}`](input);
        if (theme.bold)
            input = chalk.bold(input);
        if (theme.italic)
            input = chalk.italic(input);
        if (theme.underline)
            input = chalk.underline(input);
        if (theme.inverse)
            input = chalk.inverse(input);
        if (theme.strikethrough)
            input = chalk.strikethrough(input);
        if (theme.dim)
            input = chalk.dim(input);
        if (theme.hidden)
            input = chalk.hidden(input);
        if (theme.visible)
            input = chalk.visible(input);
        return input;
    }
}
//# sourceMappingURL=Renderer.js.map