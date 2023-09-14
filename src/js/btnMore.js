"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BtnMore {
    constructor({ selector, hidden = false }) {
        this.refs = this.getRefs(selector);
        if (hidden) {
            this.hide();
        }
    }
    getRefs(selector) {
        const button = document.querySelector(selector);
        const label = button.querySelector('.label');
        const refs = { button, label };
        return refs;
    }
    enable() {
        this.refs.button.disabled = false;
        this.refs.label.textContent = 'Show more';
    }
    disable() {
        this.refs.button.disabled = true;
        this.refs.label.textContent = 'Loading...';
    }
    show() {
        this.refs.button.classList.remove('is-hidden');
    }
    hide() {
        this.refs.button.classList.add('is-hidden');
    }
}
exports.default = BtnMore;
