/**
 * Joins a list of class names into one string, ignoring falsy values.
 * Usage: classMap(['icon', isActive && 'active']) => 'icon active'
 */
export declare function classMap(classes: (string | false | null | undefined)[]): string;
/**
 * Conditionally sets or removes an attribute on an element.
 */
export declare function setIf(el: HTMLElement, attr: string, value?: string | number | null): void;
/**
 * Creates an element from an HTML string.
 * Example: createElement('<div class="box">Hello</div>')
 */
export declare function createElement(htmlStr: string): HTMLElement;
//# sourceMappingURL=dom.d.ts.map