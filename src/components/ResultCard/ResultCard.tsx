import { Component, ReactElement } from 'react';
import s from './ResultCard.module.scss';

interface ResultCardProps {
  name: string;
  description: string;
}

export default class ResultCard extends Component<ResultCardProps> {
  render(): ReactElement {
    return (
      <div className={s.card}>
        <p className={s.title}>{this.props.name}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
