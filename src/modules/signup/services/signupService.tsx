// services/authService.ts
import axios from "axios";

const BASE_URL = "http://localhost:5000/signup";

export interface SignupResponse {
  success: boolean;
  error?: string;
}

export const signup = async (
  username: string,
  password: string,
  currency: string
): Promise<SignupResponse> => {
  try {
    const response = await axios.post(`${BASE_URL}`, {
      username,
      password,
      currency,
    });

    if (response.data.success) {
      return { success: true };
    } else {
      return { success: false, error: response.data.error || "Signup failed" };
    }
  } catch (error) {
    console.error("Error during signup:", error);
    return {
      success: false,
      error: "An unexpected error occurred during signup",
    };
  }
};
