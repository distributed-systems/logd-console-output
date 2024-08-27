import Renderer, { IRdenderOptions } from './Renderer.js';



export class NullRenderer extends Renderer {

    getName() {
        return 'null';
    }


    

    render({
        context,
        value,
        label,
        decoration,
        color,
    } : IRdenderOptions) {
        context.renderDecoration({label, decoration, close: true});
        context.print(this.decorate(context, '<null>', 'text', color));
    }
}