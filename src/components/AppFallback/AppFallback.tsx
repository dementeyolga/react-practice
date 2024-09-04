import { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';

export default class AppFallback extends Component {
  render() {
    return (
      <>
        <SearchBar disabled />
        <h3>Some error has happened, please try again</h3>
      </>
    );
  }
}
