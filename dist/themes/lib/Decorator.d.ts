export default class Decorator {
    name: string;
    color: string;
    bold: boolean;
    dim: boolean;
    constructor({ name, color, bold, dim, }: {
        name: string;
        color?: string;
        bold?: boolean;
        dim?: boolean;
    });
    apply(theme: {
        [key: string]: boolean | string;
    }): void;
}
//# sourceMappingURL=Decorator.d.ts.map