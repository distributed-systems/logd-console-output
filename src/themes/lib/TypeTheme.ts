import Decorator from './Decorator.js';




export default class TypeTheme {

    name: string;
    decorators: Map<string, Decorator>;

    constructor(name: string, decorators: Decorator[]) {
        this.decorators = new Map();
        this.name = name;
        decorators.forEach(decorator => this.addDecorator(decorator));
    }

    getName(): string {
        return this.name;
    }

    addDecorator(decorator: Decorator) : void {
        this.decorators.set(decorator.name, decorator);
    }

    getDecorator(name: string) : Decorator {
        if (!this.decorators.has(name)) throw new Error(`Decorator ${name} not found in theme ${this.name}`);
        return this.decorators.get(name)!;
    }

    getDecorators() : Map<string, Decorator> {
        return this.decorators;
    }

    hasDecorator(name: string) {
        return this.decorators.has(name);
    }
}