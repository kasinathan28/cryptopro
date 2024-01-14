// userModel.tsx

export interface User {
    id: string;
    username: string;
    email: string;
  }
  
  export interface LoginCredentials {
    username: string;
    password: string;
  }
  
  export interface RegistrationData {
    username: string;
    email: string;
    password: string;
  }
  
  export interface ApiResponse {
    success: boolean;
    data?: User;
    error?: string;
  }
  