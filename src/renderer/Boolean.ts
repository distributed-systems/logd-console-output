import Renderer, { IRdenderOptions } from './Renderer.js';


export class BooleanRenderer extends Renderer {

    getName() {
        return 'boolean';
    }


    

    render({
        context,
        value,
        label,
        decoration,
    }: IRdenderOptions) {
        context.renderDecoration({label, decoration, close: true});
        context.print(this.decorate(context, value, 'text'));
    }
}