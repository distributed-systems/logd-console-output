import Renderer, { IRdenderOptions } from './Renderer.js';



export class NumberRenderer extends Renderer {

    getName() {
        return 'number';
    }


    

    render({
        context,
        value,
        label,
        decoration,
        color,
    }: IRdenderOptions) {
        context.renderDecoration({label, decoration, close: true});
        context.print(this.decorate(context, value, 'text', color));
    }
}