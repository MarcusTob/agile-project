import axios from "axios";

const UserService = (() => {
  const userUrl = "http://localhost:5219/Marketplace/user";

  const getUserById = async (id) => {
    try {
      const response = await axios.get(`${userUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error("error getting user", error);
    }
  };

  const createUser = async (newUser) => {
    try {
      const response = await axios.post(userUrl, newUser);
    } catch (error) {
      console.log("error creating user", error);
    }
  };

  const userLogin = async (user) => {
    try {
      const response = await axios.post(`${userUrl}/login`, user);
      return response.data;
    } catch (error) {
      console.log("error logging in", error);
    }
  };

  return {
    getUserById,
    createUser,
    userLogin,
  };
})();
export default UserService;
