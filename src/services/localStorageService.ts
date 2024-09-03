class LocalStorageService {
  private readonly prefix: string;
  private readonly searchKey: string;

  constructor(prefix: string) {
    this.prefix = prefix;
    this.searchKey = `${this.prefix}_searchValue`;
  }

  setSearchValue(value: string): void {
    localStorage.setItem(this.searchKey, value);
  }

  getSearchValue(): string | null {
    return localStorage.getItem(this.searchKey);
  }
}

export const swapiLocalStorage = new LocalStorageService('swapi-search');
