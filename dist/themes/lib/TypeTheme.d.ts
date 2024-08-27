import Decorator from './Decorator.js';
export default class TypeTheme {
    name: string;
    decorators: Map<string, Decorator>;
    constructor(name: string, decorators: Decorator[]);
    getName(): string;
    addDecorator(decorator: Decorator): void;
    getDecorator(name: string): Decorator;
    getDecorators(): Map<string, Decorator>;
    hasDecorator(name: string): boolean;
}
//# sourceMappingURL=TypeTheme.d.ts.map