import Renderer, { IRdenderOptions } from './Renderer.js';



export default class PromiseRenderer extends Renderer {

    getName() {
        return 'promise';
    }


    

    render({
        context,
        value,
        label,
        decoration,
    }: IRdenderOptions) {
        context.renderDecoration({label, decoration: (decoration ? decoration+' ' : '')+`[Promise]`, close: true});
        context.print(this.decorate(context, '<promise>', 'name'));
    }
}