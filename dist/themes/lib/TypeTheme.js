export default class TypeTheme {
    name;
    decorators;
    constructor(name, decorators) {
        this.decorators = new Map();
        this.name = name;
        decorators.forEach(decorator => this.addDecorator(decorator));
    }
    getName() {
        return this.name;
    }
    addDecorator(decorator) {
        this.decorators.set(decorator.name, decorator);
    }
    getDecorator(name) {
        if (!this.decorators.has(name))
            throw new Error(`Decorator ${name} not found in theme ${this.name}`);
        return this.decorators.get(name);
    }
    getDecorators() {
        return this.decorators;
    }
    hasDecorator(name) {
        return this.decorators.has(name);
    }
}
//# sourceMappingURL=TypeTheme.js.map