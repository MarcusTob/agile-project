import React, { useState, useContext } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import UserService from "../services/UserService";
import UserContext from "../UserContext";

// Login component
const Login = () => {
  // Access setUser function from UserContext
  const { setUser } = useContext(UserContext);
  // State for username and password inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
            style={{ color: 'white' }} // Ensure text color is white
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* Password input */}
          <div className="relative">
            <input
              className="w-full bg-transparent border-b-2 border-collection-1-brandtextwhite text-collection-1-brandtextwhite text-p font-customFont pl-3 placeholder-white"
              style={{ color: 'white' }} // Ensure text color is white
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Toggle show/hide password icon */}
      {showPassword ? (
        <BiShow onClick={toggleShowPassword} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white" />
      ) : (
        <BiHide onClick={toggleShowPassword} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white" />
      )}
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
