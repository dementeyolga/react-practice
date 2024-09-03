import { SwapiCharacter, swapiResponse } from '@/types/swapiTypes';
import { createSearchQuery } from '@/utils/queryStringCreator';
import axios from 'axios';

class swapiService {
  private readonly baseURL = 'https://swapi.dev/api/';

  async searchCharacters(
    searchTerm: string,
    page: string = '1',
  ): Promise<SwapiCharacter[]> {
    try {
      const strQuery = createSearchQuery([
        ['search', searchTerm],
        ['page', page],
      ]);
      const url = `${this.baseURL}people${strQuery}`;
      const resp = (await axios.get(url)).data as swapiResponse;

      return resp.results;
    } catch {
      throw new Error('Something went wrong, please try again');
    }
  }
}

export const swapi = new swapiService();
