import Renderer, { IRdenderOptions } from './Renderer.js';


export class BufferRenderer extends Renderer {

    getName() {
        return 'buffer';
    }


    

    render({
        context,
        value,
        label,
        decoration,
        color,
    } : IRdenderOptions) {
        context.renderDecoration({label, decoration: (decoration ? decoration+' ' : '')+`[Buffer] (${value.length} bytes)`, close: true});
        context.print(this.decorate(context, this.truncate('0x'+value.slice(0, 80).toString('HEX'), 80), 'text', color));
    }
}