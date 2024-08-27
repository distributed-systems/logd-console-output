import Renderer from './Renderer.js';
export default class PromiseRenderer extends Renderer {
    getName() {
        return 'promise';
    }
    render({ context, value, label, decoration, }) {
        context.renderDecoration({ label, decoration: (decoration ? decoration + ' ' : '') + `[Promise]`, close: true });
        context.print(this.decorate(context, '<promise>', 'name'));
    }
}
//# sourceMappingURL=Promise.js.map