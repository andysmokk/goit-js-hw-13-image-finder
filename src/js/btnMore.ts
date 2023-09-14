export default class BtnMore {
  public refs: { button: HTMLButtonElement; label: HTMLLabelElement };

  constructor({ selector, hidden = false }: { selector: string; hidden?: boolean }) {
    this.refs = this.getRefs(selector);

    if (hidden) {
      this.hide();
    }
  }

  private getRefs(selector: string) {
    const button = document.querySelector(selector) as HTMLButtonElement;
    const label = button.querySelector('.label') as HTMLLabelElement;

    const refs: { button: HTMLButtonElement; label: HTMLLabelElement } = { button, label };

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
