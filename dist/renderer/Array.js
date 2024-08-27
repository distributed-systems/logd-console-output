import Renderer from './Renderer.js';
export default class ArrayRenderer extends Renderer {
    getName() {
        return 'array';
    }
    render({ context, value, label, options, }) {
        context.renderDecoration({ label, decoration: `[Array] (${value.length}): [` });
        if (Array.isArray(value)) {
            context.in();
            value.forEach((value, index) => {
                context.newLine();
                context.renderValue({
                    value, decoration: `${index}`,
                    options,
                });
            });
            context.out();
            context.newLine();
        }
        context.renderDecoration({ decoration: `]` });
    }
}
//# sourceMappingURL=Array.js.map