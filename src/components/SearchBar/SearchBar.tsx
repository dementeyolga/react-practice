import { ChangeEvent, Component, FormEvent, ReactNode } from 'react';
import searchIcon from '@/assets/images/search-icon.svg';
import s from './SearchBar.module.scss';

interface SearchBarState {
  searchValue: string;
}

export default class SearchBar extends Component<object, SearchBarState> {
  state = {
    searchValue: '',
  };

  handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchValue: e.currentTarget.value,
    });
  };

  handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  render(): ReactNode {
    return (
      <form className={s.bar} onSubmit={this.handleSearch}>
        <input
          type="text"
          name="Search"
          placeholder="Search..."
          className={s.input}
          onChange={this.handleInput}
        />
        <button type="submit" className={s.button}>
          <img src={searchIcon} alt="" />
        </button>
      </form>
    );
  }
}
