import { Component } from 'react';
import clsx from 'clsx';
import { swapi } from './services/swapiService';
import type { SwapiCharacter } from './types/swapiTypes';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import { swapiLocalStorage } from './services/localStorageService';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ErrorButton from './components/ErrorButton/ErrorButton';
import s from './App.module.scss';

interface AppState {
  characters: SwapiCharacter[] | null;
}

export default class App extends Component<object, AppState> {
  state: AppState = {
    characters: null,
  };

  private getCharacters = async (
    searchValue: string,
    page: string = '1',
  ): Promise<void> => {
    const characters = await swapi.searchCharacters(searchValue, page);
    this.setState({
      characters,
    });
    swapiLocalStorage.setSearchValue(searchValue);
  };

  async componentDidMount(): Promise<void> {
    const searchValue = swapiLocalStorage.getSearchValue();

    if (searchValue) {
      await this.getCharacters(searchValue);
    } else {
      await this.getCharacters('');
    }
  }

  render() {
    return (
      <ErrorBoundary>
        <div className={clsx(s.app, 'wrapper')}>
          <div className={s.block}>
            <SearchBar searchHandler={this.getCharacters} />
          </div>
          <div className={s.block}>
            <ErrorButton />
          </div>
          <div className={s.block}>
            <SearchResults results={this.state.characters} />
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}
