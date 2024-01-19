  export interface Coin {
      id: string;
      name: string;
      symbol: string;
      price: string;
      large: string;
      sparkline: string;
    }

    export const fetchCoinDetails = async (apiUrl: string): Promise<Coin[]> => {
      console.log("fetchCoinDetails called");
    
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const { data } = await response.json();
    
        console.log("Fetched data:", data);
    
        const coins: Coin[] = data.map((coin: any) => ({
          id: coin.id,
          name: coin.name,
          symbol: coin.symbol,
          price: coin.price,
          large: coin.large,
          sparkline: coin.sparkline,
        }));
    
        return coins;
      } catch (error) {
        console.error("Error fetching coin details:", error);
        throw error;
      }
    };
    
    

 