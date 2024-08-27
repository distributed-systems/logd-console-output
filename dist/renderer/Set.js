import Renderer from './Renderer.js';
export default class SetRenderer extends Renderer {
    getName() {
        return 'set';
    }
    render({ context, value, label, options, }) {
        context.renderDecoration({ label, decoration: `[Set] (${value.size}): [` });
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
        context.renderDecoration({ decoration: `]` });
    }
}
//# sourceMappingURL=Set.js.map