import { Component } from 'react';
import Button from '@components/Button/Button';
import s from './ErrorButton.module.scss';

export default class ErrorButton extends Component {
  render() {
    return <Button className={s.errorBtn}>Throw an error!</Button>;
  }
}
