  // coinService.tsx

  export interface Coin {
      id: string;
      name: string;
      symbol: string;
      price: string;
      large: string;
      sparkline: string;
    }
    
    export const fetchCoinDetails = async (apiUrl: string): Promise<Coin[]> => {
      console.log("coinService called");
      
      try {
        const response = await fetch(apiUrl);
        const { data } = await response.json();
        console.log(data);
        
        return data;
      } catch (error) {
        console.error("Error fetching coin details:", error);
        throw error;
      }
    };
    