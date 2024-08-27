import Renderer from './Renderer.js';
export class RegExpRenderer extends Renderer {
    getName() {
        return 'regexp';
    }
    render({ context, value, label, decoration, color, }) {
        context.renderDecoration({ label, decoration: (decoration ? decoration + ' ' : '') + '[RegExp]', close: true });
        context.print(this.decorate(context, value, 'text', color));
    }
}
//# sourceMappingURL=RegExp.js.map