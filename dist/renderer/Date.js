import Renderer from './Renderer.js';
export default class DateRenderer extends Renderer {
    getName() {
        return 'date';
    }
    render({ context, value, label, decoration, color, }) {
        context.renderDecoration({ label, decoration, close: true });
        context.print(this.decorate(context, value.toISOString(), 'text', color));
    }
}
//# sourceMappingURL=Date.js.map