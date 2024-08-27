import Decorator from './lib/Decorator.js';
import Theme from './lib/Theme.js';
import TypeTheme from './lib/TypeTheme.js';
export default class DefaultDarkTheme extends Theme {
    constructor() {
        super('default.dark', 4);
        this.addType(new TypeTheme('moduleName', [
            new Decorator({
                name: 'text',
                color: 'magenta',
                bold: true,
                dim: true,
            })
        ]));
        this.addType(new TypeTheme('string', [
            new Decorator({
                name: 'text',
                color: 'white',
                bold: true,
                dim: true,
            })
        ]));
        this.addType(new TypeTheme('number', [
            new Decorator({
                name: 'text',
                color: 'blue',
                bold: true,
            })
        ]));
        this.addType(new TypeTheme('date', [
            new Decorator({
                name: 'text',
                color: 'magenta',
                bold: true,
            })
        ]));
        this.addType(new TypeTheme('boolean', [
            new Decorator({
                name: 'text',
                color: 'yellow',
            })
        ]));
        this.addType(new TypeTheme('regexp', [
            new Decorator({
                name: 'text',
                color: 'red',
                bold: true,
                dim: true,
            })
        ]));
        this.addType(new TypeTheme('symbol', [
            new Decorator({
                name: 'text',
                color: 'red',
                bold: true,
                dim: true,
            })
        ]));
        this.addType(new TypeTheme('undefined', [
            new Decorator({
                name: 'text',
                color: 'blue',
                bold: true,
                dim: true,
            })
        ]));
        this.addType(new TypeTheme('null', [
            new Decorator({
                name: 'text',
                color: 'blue',
                bold: true,
                dim: true,
            })
        ]));
        this.addType(new TypeTheme('recursion', [
            new Decorator({
                name: 'text',
                color: 'grey',
            })
        ]));
        this.addType(new TypeTheme('weakSet', [
            new Decorator({
                name: 'text',
                color: 'red',
                bold: true,
                dim: true,
            })
        ]));
        this.addType(new TypeTheme('weakMap', [
            new Decorator({
                name: 'text',
                color: 'red',
                bold: true,
                dim: true,
            })
        ]));
        this.addType(new TypeTheme('buffer', [
            new Decorator({
                name: 'text',
                color: 'white',
                dim: true,
            })
        ]));
        this.addType(new TypeTheme('function', [
            new Decorator({
                name: 'name',
                color: 'cyan',
            }),
            new Decorator({
                name: 'source',
                color: 'white',
                dim: true,
            })
        ]));
        this.addType(new TypeTheme('callsite', [
            new Decorator({
                name: 'path',
                color: 'white',
                dim: true,
            }),
            new Decorator({
                name: 'line',
                color: 'grey',
            }),
            new Decorator({
                name: 'signature',
                color: 'white',
                dim: true,
            }),
            new Decorator({
                name: 'time',
                color: 'grey',
            })
        ]));
        this.addType(new TypeTheme('promise', [
            new Decorator({
                name: 'name',
                color: 'red',
                bold: true,
                dim: true,
            })
        ]));
        this.addType(new TypeTheme('error', [
            new Decorator({
                name: 'message',
                color: 'white',
                bold: true,
            }),
            new Decorator({
                name: 'type',
                color: 'red',
                bold: true,
            }),
            new Decorator({
                name: 'path',
                color: 'yellow',
            }),
            new Decorator({
                name: 'decoration',
                color: 'grey',
            }),
            new Decorator({
                name: 'line',
                color: 'white',
            }),
            new Decorator({
                name: 'function',
                color: 'white',
            }),
            new Decorator({
                name: 'property',
                color: 'white',
                dim: true,
            }),
            new Decorator({
                name: 'propertyValue',
                color: 'white',
            })
        ]));
        this.addType(new TypeTheme('decoration', [
            new Decorator({
                name: 'text',
                color: 'white',
                dim: true
            }),
            new Decorator({
                name: 'decorator',
                color: 'grey',
                dim: true
            })
        ]));
    }
}
//# sourceMappingURL=DefaultDark.js.map