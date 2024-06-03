import axios from "axios";

const UserService = (() => {
    const userUrl = "http://localhost:5219/Marketplace/User";

    const getUserById = async () => {
        try{
            const response = await axios.get(`${userUrl}/${id}`);
            return response.data;
        }
        catch (error){
            console.error("error getting user", error);
        }
    }
    const createUser = async (newUser) => {
        try{
            const response = await axios.post(userUrl, newUser);
        }
        catch(error){
            console.log("error creating user", error);
        }
    }

    return{
        getUserById,
        createUser

    }

}) ();
export default UserService;