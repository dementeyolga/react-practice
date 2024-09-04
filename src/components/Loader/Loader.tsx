import { Component } from 'react';
import s from './Loader.module.scss';

export default class Loader extends Component {
  render() {
    return <div className={s.loader}></div>;
  }
}
