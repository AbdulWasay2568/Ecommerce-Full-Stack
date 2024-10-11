import { apiClient } from './axios';
import { RegisterUserDto, LoginUserDto } from '../interfaces/auth.interface'; 

// Type guard to check if error is an AxiosError
function isAxiosError(error: unknown): error is { response: { data: { message: string } } } {
  return (
    typeof error === 'object' &&
    error !== null &&
    'response' in error &&
    typeof (error as any).response?.data?.message === 'string'
  );
}

// Inside your service
export const registerUser = async (data: RegisterUserDto) => {
  try {
    const response = await apiClient.post('/auth/register', JSON.stringify(data));
    return response.data; 
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.error('Error during registration:', error.response.data.message); // Access safely
      throw new Error(error.response.data.message); // Re-throw the detailed error
    } else {
      console.error('Unexpected error:', error); // Handle non-Axios errors
      throw new Error('An unexpected error occurred during registration.');
    }
  }
};

// Function to log in a user
export const loginUser = async (data: LoginUserDto) => {
  try {
    const response = await apiClient.post('/auth/login', data);
    return response.data; // Contains the token
  } catch (error) {
    throw error; 
  }
};

//Function to fetch user profile or data if needed
export const fetchUserProfile = async (userID: number) => {
  try {
    const response = await apiClient.get(`/users/${userID}`);
    return response.data; // Contains user profile data
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error; 
  }
};
