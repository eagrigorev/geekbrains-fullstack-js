export declare function renderBlock(elementId: string, html: string): void;
interface Message {
    text: string;
    type: string;
}
declare type Action = {
    name: string;
    handler(): void;
};
export declare function renderToast(message: Message, action: Action): void;
export {};
