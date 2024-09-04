import { Component } from 'react';
import Button from '@components/Button/Button';
import s from './ErrorButton.module.scss';

interface State {
  error: boolean;
}

export default class ErrorButton extends Component<object, State> {
  state: State = {
    error: false,
  };

  render() {
    if (this.state.error) {
      throw new Error('Error has happened');
    }

    return (
      <Button
        className={s.errorBtn}
        onClick={() => this.setState({ error: true })}
      >
        Throw an error!
      </Button>
    );
  }
}
