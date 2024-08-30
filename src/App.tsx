import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import clsx from 'clsx';
import s from './App.module.scss';

function App() {
  return (
    <div className={clsx('wrapper', s.app)}>
      <div className={s.block}>
        <SearchBar />
      </div>
      <div className={s.block}>
        <SearchResults />
      </div>
    </div>
  );
}

export default App;
