import axios from "axios";
import { Coin } from "../services/coinService";

const addCoinUrl = "http://localhost:5000/addCoin"; // Replace with your actual URL

const addCoinToDatabase = async (coin: Coin): Promise<void> => {
  try {
    console.log("API call:", addCoinUrl, coin);
    await axios.post(addCoinUrl, coin);
    console.log("Coin details added to the database:", coin);
  } catch (error) {
    console.error("Error adding coin details to the database:", error);
  }
};

export { addCoinToDatabase };
