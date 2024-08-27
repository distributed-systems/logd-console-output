import Renderer from './Renderer.js';
import RootPath from 'app-root-path';
import path from 'path';
export class CallsiteRenderer extends Renderer {
    getName() {
        return 'callsite';
    }
    render({ context, value, }) {
        context.print(this.decorate(context, this.getTimeSignature(value.date) + ' > ', 'time'));
        context.print(this.decorate(context, this.pad(this.truncateLeft(this.truncatePath(value.fileName || 'n/a')), 31, ' '), 'path'));
        context.print(this.decorate(context, `:${this.padRight(value.lineNumber || 'n/a')} `, 'line'));
        context.print(this.decorate(context, this.pad(this.truncateLeft(this.getSignature(value), 25), 25, ' '), 'signature'));
    }
    getTimeSignature(date) {
        const p = this.pad;
        const d = date || new Date();
        return `${p(d.getDate().toString())}  ${p(d.getHours().toString())}:${p(d.getMinutes().toString())}:${p(d.getSeconds().toString())}.${p(d.getMilliseconds().toString(), 3)}`;
    }
    padRight(input = '', len = 5, char = ' ') {
        input = input + '';
        if (input.length < len)
            return input + char.repeat(len - input.length);
        else
            return input;
    }
    pad(input, len = 2, char = '0') {
        input = input + '';
        if (input.length < len)
            return char.repeat(len - input.length) + input;
        else
            return input;
    }
    getSignature(callsite) {
        let signature = '';
        if (callsite.type && callsite.function)
            signature = `${callsite.type}.${callsite.function}`;
        else if (callsite.type)
            signature = callsite.type;
        else if (callsite.function)
            signature = callsite.function;
        if (callsite.method)
            signature += ` (as ${callsite.method})`;
        return signature + ': ';
    }
    /**
    * truncate string to a certain length
    */
    truncateLeft(input = '', len = 31) {
        if (input.length > len)
            return '\u2026' + input.substr(input.length - len + 1);
        return input;
    }
    /**
    * truncate paths so that the part of the projects
    * directory is removed
    */
    truncatePath(filepath = '') {
        const thisdir = path.dirname(new URL(import.meta.url).pathname);
        const rootPath = RootPath.resolve(thisdir);
        // remove th eproject root
        if (filepath.startsWith(rootPath))
            filepath = filepath.substr(rootPath.length + 1);
        // check for node modules, remove that
        const index = filepath.lastIndexOf('node_modules');
        if (index >= 0)
            filepath = 'nm:' + filepath.substr(index + 'node_modules'.length);
        return filepath;
    }
}
//# sourceMappingURL=Callsite.js.map