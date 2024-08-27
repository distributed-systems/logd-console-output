import Renderer from './Renderer.js';
export default class ModuleNameRenderer extends Renderer {
    getName() {
        return 'moduleName';
    }
    render({ context, value, }) {
        context.print(this.decorate(context, `[${value}] `, 'text'));
    }
}
//# sourceMappingURL=ModuleName.js.map