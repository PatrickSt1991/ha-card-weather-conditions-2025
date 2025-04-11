// src/utils/dom.ts
/**
 * Joins a list of class names into one string, ignoring falsy values.
 * Usage: classMap(['icon', isActive && 'active']) => 'icon active'
 */
export function classMap(classes) {
    return classes.filter(Boolean).join(' ');
}
/**
 * Conditionally sets or removes an attribute on an element.
 */
export function setIf(el, attr, value) {
    if (value !== undefined && value !== null) {
        el.setAttribute(attr, String(value));
    }
    else {
        el.removeAttribute(attr);
    }
}
/**
 * Creates an element from an HTML string.
 * Example: createElement('<div class="box">Hello</div>')
 */
export function createElement(htmlStr) {
    const container = document.createElement('div');
    container.innerHTML = htmlStr.trim();
    return container.firstElementChild;
}
//# sourceMappingURL=dom.js.map