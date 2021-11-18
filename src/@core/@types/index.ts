export type ComponentTypes = "div" | "span" | "ul" | "li" | "header" | "footer" | "nav";
export interface IComponent {
    template(): string,
    mounted(): void,
    updated(): void;
}
