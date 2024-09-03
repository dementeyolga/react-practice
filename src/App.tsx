import { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import s from './App.module.scss';
import clsx from 'clsx';
import { swapi } from './services/swapi';
import { SwapiCharacter } from './types/swapiTypes';

interface AppState {
  characters: SwapiCharacter[] | null;
}

class App extends Component<null, AppState> {
  state: Readonly<AppState> = {
    characters: null,
  };

  async componentDidMount(): Promise<void> {
    const characters = await swapi.searchCharacters('');
    this.setState({
      characters,
    });

    console.log(characters);
  }

  render() {
    return (
      <div className={clsx(s.app, 'wrapper')}>
        <div className={s.block}>
          {this.state.characters?.map(({ name }) => <p key={name}>{name}</p>)}
          <SearchBar />
        </div>
        <div className={s.block}>
          <SearchResults />
        </div>
      </div>
    );
  }
}

export default App;
