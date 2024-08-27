import Renderer, { IRdenderOptions } from './Renderer.js';


export class DateRenderer extends Renderer {

    getName() {
        return 'date';
    }


    

    render({
        context,
        value,
        label,
        decoration,
        color,
    } : IRdenderOptions) {
        context.renderDecoration({label, decoration, close: true});
        context.print(this.decorate(context, value.toISOString(), 'text', color));
    }
}