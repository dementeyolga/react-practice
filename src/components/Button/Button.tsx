import { Component } from 'react';
import clsx from 'clsx';
import s from './Button.module.scss';

interface Props {
  children: string;
  className?: string;
  onClick?: () => void;
}

export default class Button extends Component<Props> {
  render() {
    return (
      <button
        className={clsx(s.button, this.props.className)}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}
