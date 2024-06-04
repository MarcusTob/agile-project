import React from "react";
import { BiHide } from "react-icons/bi";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import UserService from "../services/UserService";
import UserContext from "../UserContext";

export const Login = () => {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await UserService.userLogin({ username, password });
    if (user) {
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="bg-brandBgLight flex items-center justify-center w-full min-h-screen">
      <div className="w-[80%] max-w-[500px] p-10 rounded-lg shadow-lg">
        <h1 className="font-extrabold text-brandOrange text-[48px] text-center mb-10">
          Login
        </h1>
        <form onSubmit={handleLogin} className="flex flex-col space-y-6">
          <input
            className="w-full bg-transparent border-b-2 border-collection-1-brandtextwhite text-collection-1-brandtextwhite text-base pl-3 placeholder-white"
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="relative">
            <input
              className="w-full bg-transparent border-b-2 border-collection-1-brandtextwhite text-collection-1-brandtextwhite text-base pl-3 placeholder-white"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <BiHide className="absolute top-1/2 right-3 transform -translate-y-1/2 text-collection-1-brandtextwhite" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember" className="ml-2 text-white">
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" className="text-red-500">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-brandOrange rounded-lg text-black text-[24px] font-bold py-2"
          >
            Login
          </button>
        </form>
        <p className="text-center text-[18px] mt-8 text-brandOrange">
          Don't have an account?{" "}
          <Link to="/registeruser" className="font-semibold text-white">
            Register here!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
