import Renderer, { IRdenderOptions } from './Renderer.js';
import RootPath from 'app-root-path';
import path from 'path';
import types from 'ee-types'
import ErrorStackParser, { StackFrame } from 'error-stack-parser';



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
        let structuredFrames = ErrorStackParser.parse(value);


        
        // print the frames
        structuredFrames.forEach((frame) => {
            context.newLine();
            context.print(this.decorate(context, this.pad(this.truncateLeft(this.truncatePath(frame.fileName) || 'n/a')), 'path'));
            
            if (frame.lineNumber) context.print(this.decorate(context, this.pad(`${frame.lineNumber}`, 5), 'line'));
            else context.print(' '.repeat(5));

            if (frame.columnNumber) context.print(this.decorate(context, this.pad(`:${frame.columnNumber} `, 5, true), 'decoration'));
            else context.print(' '.repeat(5));

            if (frame.functionName) context.print(this.decorate(context, (frame.functionName ?? '').trim(), 'function'));
        });
    }






    /**
    * truncate string to a certain length
    */
    private truncateLeft(input: string, len = 31) {
        if (input.length > len) return '\u2026'+input.substr(input.length-len+1);
        return input;
    }






    /**
    * pad strings do that they have a given length
    */
    private pad(input: string, len = 31, right = false) {
        if (input.length < len) {
            if (right) return input+' '.repeat(len-input.length);
            else return ' '.repeat(len-input.length)+input;
        } else return input;
    }










    /**
    * truncate paths so that the part of the projects
    * directory is removed
    */
    private truncatePath(filepath = '') {
        const thisdir = path.dirname(new URL(import.meta.url).pathname);
        const rootPath = RootPath.resolve(thisdir);
        filepath = filepath.replace('file://', '');

        // remove th eproject root
        if (filepath.startsWith(rootPath)) filepath = filepath.substr(rootPath.length+1);

        // check for node modules, remove that
        const index = filepath.lastIndexOf('node_modules');
        if (index >= 0) filepath = 'nm:'+filepath.substr(index+'node_modules'.length);

        return filepath;
    }
}