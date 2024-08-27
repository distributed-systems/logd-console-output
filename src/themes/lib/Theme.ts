import TypeTheme from './TypeTheme.js';


export default class Theme {

    name: string;
    indentation: number;
    types: Map<string, TypeTheme> = new Map();

    constructor(name: string, indentation: number) {
        this.name = name;
        this.indentation = indentation;
    }

    addType(type: TypeTheme) : void {
        this.types.set(type.getName(), type);
    }

    getType(name: string) : TypeTheme {
        if (!this.types.has(name)) throw new Error(`Type ${name} not found in theme ${this.name}`);
        return this.types.get(name)!;
    }

    getTypes() {
        return this.types;
    }

    hasType(name: string) {
        return this.types.has(name);
    }
}