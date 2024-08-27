import Renderer, { IRdenderOptions } from './Renderer.js';



export default class SmbolRenderer extends Renderer {

    getName() {
        return 'symbol';
    }


    

    render({
        context,
        value,
        label,
        decoration,
        color,
    }: IRdenderOptions) {
        context.renderDecoration({label, decoration: (decoration ? decoration+' ' : '')+'[Symbol]', close: true});
        context.print(this.decorate(context, value, 'text', color));
    }
}