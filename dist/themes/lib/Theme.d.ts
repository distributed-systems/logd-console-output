import TypeTheme from './TypeTheme.js';
export default class Theme {
    name: string;
    indentation: number;
    types: Map<string, TypeTheme>;
    constructor(name: string, indentation: number);
    addType(type: TypeTheme): void;
    getType(name: string): TypeTheme;
    getTypes(): Map<string, TypeTheme>;
    hasType(name: string): boolean;
}
//# sourceMappingURL=Theme.d.ts.map