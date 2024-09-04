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
import { delay } from './utils/delay';
import AppFallback from './components/AppFallback/AppFallback';

interface AppState {
  characters: SwapiCharacter[] | null;
  hasFetchError: boolean;
}

export default class App extends Component<object, AppState> {
  state: AppState = {
    characters: null,
    hasFetchError: false,
  };

  private getCharacters = async (
    searchValue: string,
    page: string = '1',
  ): Promise<void> => {
    try {
      this.setState({ characters: null, hasFetchError: false });
      await delay(500);
      const characters = await swapi.searchCharacters(searchValue, page);
      this.setState({ characters });
      swapiLocalStorage.setSearchValue(searchValue);
    } catch {
      this.setState({ hasFetchError: true });
    }
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
      <ErrorBoundary fallback={<AppFallback />}>
        <div className={clsx(s.app, 'wrapper')}>
          <div className="block">
            <SearchBar searchHandler={this.getCharacters} />
          </div>
          <div className="block">
            <ErrorButton />
          </div>
          <div className="block">
            {this.state.hasFetchError ? (
              <h3>Error getting results, please try again</h3>
            ) : (
              <SearchResults results={this.state.characters} />
            )}
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}
