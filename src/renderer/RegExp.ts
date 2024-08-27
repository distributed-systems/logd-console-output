import Renderer, { IRdenderOptions } from './Renderer.js';



export class RegExpRenderer extends Renderer {

    getName() {
        return 'regexp';
    }


    

    render({
        context,
        value,
        label,
        decoration,
        color,
    } : IRdenderOptions) {
        context.renderDecoration({label, decoration: (decoration ? decoration+' ' : '')+'[RegExp]', close: true});
        context.print(this.decorate(context, value, 'text', color));
    }
}