export default class Decorator {
    name;
    color;
    bold = false;
    dim = false;
    constructor({ name, color, bold, dim, }) {
        this.name = name;
        if (color)
            this.color = color;
        if (bold)
            this.bold = bold;
        if (dim)
            this.dim = dim;
    }
    apply(theme) {
        if (this.color)
            theme.color = this.color;
        if (this.bold)
            theme.bold = this.bold;
        if (this.dim)
            theme.dim = this.dim;
    }
}
//# sourceMappingURL=Decorator.js.map