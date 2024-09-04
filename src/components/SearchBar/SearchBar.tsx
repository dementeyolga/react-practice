import { ChangeEvent, Component, FormEvent, ReactNode } from 'react';
import searchIcon from '@/assets/images/search-icon.svg';
import s from './SearchBar.module.scss';
import { swapiLocalStorage } from '@/services/localStorageService';

interface Props {
  searchHandler?: (
    searchValue: string,
    page?: string,
  ) => Promise<void> | undefined;
  disabled?: true;
}

interface State {
  searchValue: string;
}

export default class SearchBar extends Component<Props, State> {
  state = {
    searchValue: swapiLocalStorage.getSearchValue() || '',
  };

  handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchValue: e.currentTarget.value,
    });
  };

  handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.props.searchHandler) {
      this.props.searchHandler(this.state.searchValue.trim());
    }
  };

  render(): ReactNode {
    return (
      <form className={s.bar} onSubmit={this.handleSearch}>
        <input
          type="text"
          name="Search"
          placeholder="Search..."
          value={this.state.searchValue}
          className={s.input}
          onChange={this.handleInput}
          disabled={this.props.disabled}
        />
        <button
          type="submit"
          className={s.button}
          disabled={this.props.disabled}
        >
          <img src={searchIcon} alt="" />
        </button>
      </form>
    );
  }
}
