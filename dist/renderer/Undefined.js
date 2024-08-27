import Renderer from './Renderer.js';
export class UndefinedRenderer extends Renderer {
    getName() {
        return 'undefined';
    }
    render({ context, value, label, decoration, color, }) {
        context.renderDecoration({ label, decoration, close: true });
        context.print(this.decorate(context, '<undefined>', 'text', color));
    }
}
//# sourceMappingURL=Undefined.js.map