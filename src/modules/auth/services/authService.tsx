// services/authService.ts
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export interface LoginResponse {
  success: boolean;
  error?: string;
}


export const login = async (username: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};
