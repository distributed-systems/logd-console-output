import Renderer from './Renderer.js';
export class SmbolRenderer extends Renderer {
    getName() {
        return 'symbol';
    }
    render({ context, value, label, decoration, color, }) {
        context.renderDecoration({ label, decoration: (decoration ? decoration + ' ' : '') + '[Symbol]', close: true });
        context.print(this.decorate(context, value, 'text', color));
    }
}
//# sourceMappingURL=Symbol.js.map