// fetchFav.tsx

export interface Coin {
    userId: string;
    coinId: string;
    coinLarge: string;
  }
  
  export const fetchFavoriteCoins = async (username: string): Promise<Coin[]> => {
    try {
      const response = await fetch(`http://localhost:5000/favorites?username=${username}`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data.favoriteCoins || [];
        
      } else {
        console.error('Failed to fetch favorite coins');
        return [];
      }
    } catch (error) {
      console.error('Error fetching favorite coins', error);
      return [];
    }
  };
  