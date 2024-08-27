import Renderer, { IRdenderOptions } from './Renderer.js';



export class SetRenderer extends Renderer {

    getName() {
        return 'set';
    }


    

    render({
        context,
        value,
        label,
        options,
    }: IRdenderOptions) {
        context.renderDecoration({label, decoration: `[Set] (${value.size}): [`});

        if (value.size) {
            context.in();
            let index = 0;

            for (const item of value.values()) {
                context.newLine();
                context.renderValue({
                    value: item,
                    decoration: `${index}`,
                    options,
                });
                index++;
            }

            context.out();
            context.newLine();
        }

        context.renderDecoration({decoration: `]`});
    }
}