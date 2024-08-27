import Renderer from './Renderer.js';
export default class BooleanRenderer extends Renderer {
    getName() {
        return 'boolean';
    }
    render({ context, value, label, decoration, }) {
        context.renderDecoration({ label, decoration, close: true });
        context.print(this.decorate(context, value, 'text'));
    }
}
//# sourceMappingURL=Boolean.js.map