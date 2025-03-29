export default class Theme {
    name;
    indentation;
    types = new Map();
    constructor(name, indentation) {
        this.name = name;
        this.indentation = indentation;
    }
    addType(type) {
        this.types.set(type.getName(), type);
    }
    getType(name) {
        if (!this.types.has(name))
            throw new Error(`Type ${name} not found in theme ${this.name}`);
        return this.types.get(name);
    }
    getTypes() {
        return this.types;
    }
    hasType(name) {
        return this.types.has(name);
    }
}
//# sourceMappingURL=Theme.js.map