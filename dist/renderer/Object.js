import Renderer from './Renderer.js';
export class ObjectRenderer extends Renderer {
    getName() {
        return 'object';
    }
    render({ context, value, label, decoration, options, }) {
        const keys = Object.keys(value);
        context.renderDecoration({ label, decoration: `${decoration ? decoration + ' ' : ''}[Object] (${keys.length}): {` });
        if (keys.length) {
            context.in();
            keys.forEach((key, index) => {
                context.newLine();
                context.renderValue({
                    value: value[key],
                    label: key,
                    options,
                });
            });
            context.out();
            context.newLine();
        }
        context.renderDecoration({ decoration: `}` });
    }
}
//# sourceMappingURL=Object.js.map