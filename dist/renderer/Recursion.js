import Renderer from './Renderer.js';
export default class RecursionRenderer extends Renderer {
    getName() {
        return 'recursion';
    }
    render({ context, value, label, decoration, }) {
        context.renderDecoration({ label, decoration, close: true });
        context.print(this.decorate(context, value, 'text'));
    }
}
//# sourceMappingURL=Recursion.js.map