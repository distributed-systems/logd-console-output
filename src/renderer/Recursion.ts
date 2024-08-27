import Renderer, { IRdenderOptions } from './Renderer.js';



export class RecursionRenderer extends Renderer {

    getName() {
        return 'recursion';
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