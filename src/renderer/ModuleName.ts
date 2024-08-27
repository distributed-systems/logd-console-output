import Renderer, { IRdenderOptions } from './Renderer.js';



export class ModuleNameRenderer extends Renderer {

    getName() {
        return 'moduleName';
    }


    

    render({
        context,
        value,
    } : IRdenderOptions) {
        context.print(this.decorate(context, `[${value}] `, 'text'));
    }
}
