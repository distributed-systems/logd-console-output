import Renderer, { IRdenderOptions } from './Renderer.js';



export default class StringRenderer extends Renderer {

    getName() {
        return 'string';
    }


    

    render({
        context,
        value,
        label,
        decoration,
        color,
        options,
    }: IRdenderOptions) {
        context.renderDecoration({label, decoration: (decoration ? decoration+' ' : '')+`(${value.length})`, close: true});
        context.print(this.decorate(context, this.truncate(value, options.truncate || 80), 'text', color));
    }
}