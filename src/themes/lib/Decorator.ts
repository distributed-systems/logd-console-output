


export default class Decorator {
    name: string;

    color: string;
    bold: boolean = false;
    dim: boolean = false;

    constructor({
        name,
        color,
        bold,
        dim,
    } : {
        name: string,
        color?: string,
        bold?: boolean,
        dim?: boolean,
    }) {
        this.name = name;
        if (color) this.color = color;
        if (bold) this.bold = bold;
        if (dim) this.dim = dim;
    }


    apply(theme: { 
        [key: string]: boolean | string
    }) {
        if (this.color) theme.color = this.color;
        if (this.bold) theme.bold = this.bold;
        if (this.dim) theme.dim = this.dim;
    }
}