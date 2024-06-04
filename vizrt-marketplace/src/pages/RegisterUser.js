import React, { useState } from "react";
import { BiHide } from "react-icons/bi";
import "../index.css";
import { Link } from "react-router-dom";
import UserService from "../services/UserService";

export const RegisterUser = () => {
  // State variables for username, password, and email
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the UserService to create a new user
    const user = await UserService.createUser({ username, password, email });
    if (user) {
      // Handle successful registration (e.g., redirect to login or home)
    } else {
      // Handle registration failure (e.g., show an error message)
    }
  };

  return (
    <div className="bg-brandBgLight flex items-center justify-center w-full min-h-screen">
      <div className="w-[80%] max-w-[600px] p-10 rounded-lg shadow-lg">
        <h1 className="font-extrabold text-brandOrange text-[48px] text-center mb-10">
          Create Account
        </h1>
        {/* Registration form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          {/* Username input */}
          <input
            className="w-full bg-transparent border-b-2 border-collection-1-brandtextwhite text-collection-1-brandtextwhite text-base pl-3 placeholder-white"
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* Email input */}
          <input
            className="w-full bg-transparent border-b-2 border-collection-1-brandtextwhite text-collection-1-brandtextwhite text-base pl-3 placeholder-white"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative">
            {/* Password input */}
            <input
              className="w-full bg-transparent border-b-2 border-collection-1-brandtextwhite text-collection-1-brandtextwhite text-base pl-3 placeholder-white"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Hide/show password button */}
            <BiHide className="absolute top-1/2 right-3 transform -translate-y-1/2 text-collection-1-brandtextwhite" />
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-brandOrange rounded-lg text-black text-[24px] font-bold py-2"
          >
            Create User
          </button>
        </form>
        {/* Link to login page */}
        <p className="text-center text-[18px] mt-8 text-brandOrange">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-white">
            Sign in here!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterUser;
