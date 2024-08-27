import { ICallsite } from '../RenderContext.js';
import Renderer, { IRdenderOptions } from './Renderer.js';
export default class CallsiteRenderer extends Renderer {
    getName(): string;
    render({ context, value, }: IRdenderOptions): void;
    getTimeSignature(date: Date | null): string;
    padRight(input?: string, len?: number, char?: string): string;
    pad(input: string, len?: number, char?: string): string;
    getSignature(callsite: ICallsite): string;
    /**
    * truncate string to a certain length
    */
    truncateLeft(input?: string, len?: number): string;
    /**
    * truncate paths so that the part of the projects
    * directory is removed
    */
    truncatePath(filepath?: string): string;
}
//# sourceMappingURL=Callsite.d.ts.map