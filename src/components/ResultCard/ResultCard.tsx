import { Component } from 'react';
import s from './ResultCard.module.scss';

interface Props {
  name: string;
  birthYear: string;
  height: string;
  gender: string;
  hairColor: string;
}

export default class ResultCard extends Component<Props> {
  render() {
    return (
      <div className={s.card}>
        <p className={s.title}>{this.props.name}</p>
        <div className={s.description}>
          <p>Birth year: {this.props.birthYear}</p>
          <p>Height: {this.props.height}</p>
          <p>Gender: {this.props.gender}</p>
          <p>Hair color: {this.props.hairColor}</p>
        </div>
      </div>
    );
  }
}
