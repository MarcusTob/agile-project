import React from "react";
import { BiHide } from "react-icons/bi";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import UserService from "../services/UserService";
import UserContext from "../UserContext";

// Login component
export const Login = () => {
  // Access setUser function from UserContext
  const { setUser } = useContext(UserContext);
  // State for username and password inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Navigate function from react-router-dom
  const navigate = useNavigate();

  // Function to handle login submission
  const handleLogin = async (e) => {
    e.preventDefault();
    // Call userLogin function from UserService to authenticate user
    const user = await UserService.userLogin({ username, password });
    // If user is authenticated
    if (user) {
      // Set user in context
      setUser(user);
      // Store user in local storage
      localStorage.setItem("userID", user.userID);
      // Redirect to home page
      navigate("/");
    } else {
      // If authentication fails, show alert
      alert("Invalid username or password");
    }
  };

  // Render login form
  return (
    <div className="bg-brandBgLight flex items-center justify-center w-full min-h-screen">
      <div className="w-[80%] max-w-[500px] p-10 rounded-lg shadow-lg">
        <h1 className="font-extrabold text-brandOrange text-6xl font-customFont text-center mb-10">
          Login
        </h1>
        <form onSubmit={handleLogin} className="flex flex-col space-y-6">
          {/* Username input */}
          <input
            className="w-full bg-transparent border-b-2 border-collection-1-brandtextwhite text-collection-1-brandtextwhite text-p font-customFont pl-3 placeholder-white"
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* Password input */}
          <div className="relative">
            <input
              className="w-full bg-transparent border-b-2 border-collection-1-brandtextwhite text-collection-1-brandtextwhite text-p font-customFont pl-3 placeholder-white"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Hide password icon */}
            <BiHide className="absolute top-1/2 right-3 transform -translate-y-1/2 text-collection-1-brandtextwhite" />
          </div>
          {/* Remember me checkbox and forgot password link */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember" className="ml-2 text-white text-p font-customFont">
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" className="text-red-500 text-p font-customFont">
              Forgot password?
            </Link>
          </div>
          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-brandOrange rounded-lg text-black text-h3 font-customFont font-bold py-2"
          >
            Login
          </button>
        </form>
        {/* Register link */}
        <p className="text-center text-p font-customFont mt-8 text-brandOrange">
          Don't have an account?{" "}
          <Link to="/registeruser" className="font-semibold text-white text-p font-customFont">
            Register here!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
