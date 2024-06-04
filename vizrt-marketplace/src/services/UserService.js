import axios from "axios";

const UserService = (() => {
  // Define the base URL for the user-related endpoints
  const userUrl = "http://localhost:5219/Marketplace/user";

  // Function to fetch a user by their ID
  const getUserById = async (id) => {
    try {
      // Send a GET request to the specific user URL using the provided ID
      const response = await axios.get(`${userUrl}/${id}`);
      // Return the data from the response
      return response.data;
    } catch (error) {
      // Log any errors that occur during the request
      console.error("Error getting user", error);
    }
  };

  // Function to create a new user
  const createUser = async (newUser) => {
    try {
      // Send a POST request to the user URL with the new user data
      const response = await axios.post(userUrl, newUser);
      // Return the data from the response if needed
    } catch (error) {
      // Log any errors that occur during the request
      console.error("Error creating user", error);
    }
  };

  // Function to authenticate a user login
  const userLogin = async (user) => {
    try {
      // Send a POST request to the login endpoint with the user credentials
      const response = await axios.post(`${userUrl}/login`, user);
      // Return the data from the response
      return response.data;
    } catch (error) {
      // Log any errors that occur during the request
      console.error("Error logging in", error);
    }
  };

  // Return an object with the exposed functions
  return {
    getUserById,
    createUser,
    userLogin,
  };
})();

export default UserService; // Export the UserService object
