import { Component } from 'react';
import ResultCard from '../ResultCard/ResultCard';
import s from './SearchResults.module.scss';
import { SwapiCharacter } from '@/types/swapiTypes';
import Loader from '../Loader/Loader';

interface Props {
  results: SwapiCharacter[] | null;
}

export default class SearchResults extends Component<Props> {
  render() {
    return (
      <div className={s.list}>
        {!this.props.results && <Loader />}
        {this.props.results?.length == 0 && <h3>Nothing found</h3>}
        {this.props.results?.map(
          ({ name, birth_year, gender, hair_color, height }) => {
            return (
              <ResultCard
                key={name}
                name={name}
                birthYear={birth_year}
                height={height}
                gender={gender}
                hairColor={hair_color}
              />
            );
          },
        )}
      </div>
    );
  }
}
