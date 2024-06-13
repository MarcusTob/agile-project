import axios from "axios";

const UserService = (() => {
  const userUrl = "http://localhost:5219/Marketplace/user";

  // Function to fetch a user by their ID
  const getUserById = async (id) => {
    try {
      // Send a GET request to userURl
      const response = await axios.get(`${userUrl}/${id}`);
      // Return the data from the response
      return response.data;
    } catch (error) {
      // error logging for debugging
      console.error("Error getting user", error);
    }
  };

  // Function to create a new user
  const createUser = async (newUser) => {
    try {
      // poset request to create a new user
      const response = await axios.post(userUrl, newUser);
    } catch (error) {
      // error logging for debugging
      console.error("Error creating user", error);
    }
  };

  // Function to authenticate a user login
  const userLogin = async (user) => {
    try {
      // post request to login api endpoint to authenticate user
      const response = await axios.post(`${userUrl}/login`, user);
      // Return the data from the response
      return response.data;
    } catch (error) {
      // error logging for debugging
      console.error("Error logging in", error);
    }
  };

  return {
    getUserById,
    createUser,
    userLogin,
  };
})();

export default UserService;
