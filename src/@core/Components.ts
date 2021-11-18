import { ComponentTypes } from './@types';

export default class Component<TComponentState = {}, TComponentProps extends { className?: string } = {}> {
  private state: TComponentState = {} as TComponentState;
  private props: TComponentProps;
  private container: HTMLElement;

  constructor(args: { type: ComponentTypes; props: TComponentProps; parent?: HTMLElement }) {
    const { type, props, parent } = args;
    this.props = props;
    this.container = document.createElement(type);
    const { className } = this.props;
    if (className) {
      this.container.classList.add(`component`, className);
    }
  }
}
