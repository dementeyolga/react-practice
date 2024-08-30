import { Component, ReactNode } from 'react';
import ResultCard from '../ResultCard/ResultCard';
import s from './SearchResults.module.scss';

export default class SearchResults extends Component {
  render(): ReactNode {
    return (
      <div className={s.list}>
        <ResultCard
          name="Jane"
          description="kfkfkfk fkjfkf fkfkkkldldldlr rlfllff dldl dlddldl"
        />
        <ResultCard
          name="Sam"
          description=";d;dkfldfk fkdfkkf dermrmrm gkgkgk ddkdkd"
        />
      </div>
    );
  }
}
