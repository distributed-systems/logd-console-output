import Renderer, { IRdenderOptions } from './Renderer.js';
import RootPath from 'app-root-path';
import path from 'path';
import types from 'ee-types'



export class ErrorRenderer extends Renderer {


    errorProperties: string[];


    constructor() {
        super();

        this.errorProperties = [
            'address',
            'code',
            'errno',
            'path',
            'port',
            'syscall',
        ];
    }




    getName() {
        return 'error';
    }


    

    render({
        context,
        value,
        label,
        decoration,
    } : IRdenderOptions) {
        context.renderDecoration({label, decoration, close: true});
        context.print(this.decorate(context, `[${value.name}] `, 'type'));
        context.print(this.decorate(context, value.message, 'message'));
        context.newLine();


        // some errors may have more infromation to offer,
        // print it as a block
        if (this.errorProperties.some(p => !!value[p])) {
            context.newLine();

            this.errorProperties.forEach((property) => {
                if (value[property]) {
                    context.print(this.decorate(context, this.pad(property, 8), 'property'));
                    context.print(this.decorate(context, ': ', 'decoration'));
                    context.print(this.decorate(context, value[property], 'propertyValue'));
                    context.newLine();
                }
            });
        }



        // get a proper stack
        const frames = this.convertStack(value) as any;
        let structuredFrames = this.analyzeFrames(frames);


        // remove the first frame if it contains the error message
        if (structuredFrames.length && structuredFrames[0].text && structuredFrames[0].text.includes(value.message)) {
            structuredFrames = structuredFrames.slice(1);
        }

        
        // print the frames
        structuredFrames.forEach((frame) => {
            context.newLine();
            context.print(this.decorate(context, this.pad(this.truncateLeft(frame.path || 'n/a')), 'path'));
            
            if (frame.line) context.print(this.decorate(context, this.pad(`${frame.line}`, 5), 'line'));
            else context.print(' '.repeat(5));

            if (frame.character) context.print(this.decorate(context, this.pad(`:${frame.character} `, 5, true), 'decoration'));
            else context.print(' '.repeat(5));

            context.print(this.decorate(context, (frame.fn || frame.text || '').trim(), 'function'));
            if (frame.alias) context.print(this.decorate(context, ` (${frame.alias})`, 'decoration'));
        });
    }






    /**
    * truncate string to a certain length
    */
    truncateLeft(input: string, len = 31) {
        if (input.length > len) return '\u2026'+input.substr(input.length-len+1);
        return input;
    }






    /**
    * pad strings do that they have a given length
    */
    pad(input: string, len = 31, right = false) {
        if (input.length < len) {
            if (right) return input+' '.repeat(len-input.length);
            else return ' '.repeat(len-input.length)+input;
        } else return input;
    }






    /**
    * analyze the frames of the stack
    */
    analyzeFrames(frames: string[]) {
        return frames.map((frame) => {
            const result = /(?:\n|^)\s*(?:at)?\s*([^\(\[]+)(?:\[([^\]]+)\])?\s*\(([^\):]+):?([^\):]+)?:?([0-9]+)?\)/gi.exec(frame);

            if (result) {
                return {
                    fn: result[1] ? result[1].trim() : null,
                    alias: result[2] || null,
                    path: this.truncatePath(result[3]),
                    line: result[4] && result[4] !== 'null' ? result[4] : null,
                    character: result[5] || null,
                };
            } else return {text: frame};
        });
    }





    /**
    * truncate paths so that the part of the projects
    * directory is removed
    */
    truncatePath(filepath = '') {
        const thisdir = path.dirname(new URL(import.meta.url).pathname);
        const rootPath = RootPath.resolve(thisdir);

        // remove th eproject root
        if (filepath.startsWith(rootPath)) filepath = filepath.substr(rootPath.length+1);

        // check for node modules, remove that
        const index = filepath.lastIndexOf('node_modules');
        if (index >= 0) filepath = 'nm:'+filepath.substr(index+'node_modules'.length);

        return filepath;
    }




    /**
    * convert the stack to an array containing strings
    */
    convertStack(err: Error) {
        let frames;

        if (types.array(err.stack)) {
            frames = err.stack.map((frame) => {
                if (types.string(frame)) return frame;
                else return frame.toString();
            });
        } else if (types.string(err.stack)) {
            frames = err.stack!.split(/\n/g);
        }

        return frames;
    }
}