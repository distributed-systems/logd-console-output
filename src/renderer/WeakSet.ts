import Renderer, { IRdenderOptions } from './Renderer.js';



export class WeakSetRenderer extends Renderer {

    getName() {
        return 'weakSet';
    }


    

    render({
        context,
        value,
        label,
        decoration,
    } : IRdenderOptions) {
        context.renderDecoration({label, decoration: (decoration ? decoration+' ' : '')+'[WeakSet]', close: true});
        context.print(this.decorate(context, '<non-iterable>', 'text'));
    }
}