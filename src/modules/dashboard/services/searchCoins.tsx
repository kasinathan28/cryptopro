// services/searchCoins.ts
import axios from 'axios';

export interface Coin {
  id: string;
  name: string;
  symbol: string;
  market_cap_rank: number;
  large: string;
}

export const searchCoins = async (apiUrl: string, query: string): Promise<Coin[]> => {
  try {
    if (!query) {
      return [];
    }
    const response = await axios.get(`${apiUrl}`, {
      params: { query: query },
    });
    const { success, data } = response.data;
    if (success) {
      return data;
    } else {
      console.error('Error searching coins:', response.data.error);
      return [];
    }
  } catch (error) {
    console.error('An error occurred during the API request:', error);
    return [];
  }
};
