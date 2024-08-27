import Renderer, { IRdenderOptions } from './Renderer.js';



export default class MapRenderer extends Renderer {

    getName() {
        return 'map';
    }


    

    render({
        context,
        value,
        label,
        decoration,
        options,
    } : IRdenderOptions) {
        context.renderDecoration({label, decoration: `${decoration ? decoration+' ' : ''}[Map] (${value.size}): {`});

        if (value.size) {
            context.in();
            for (const [key, item] of value.entries()) {
                context.newLine();
                context.renderValue({
                    value: item,
                    label: key,
                    options,
                });
            }
            context.out();
            context.newLine();
        }

        context.renderDecoration({decoration: `}`});
    }
}