import React from "react";
import { BiHide } from "react-icons/bi";
import "../index.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import UserService from "../services/UserService";

export const RegisterUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await UserService.createUser({ username, password, email });
  }


  return (
    <div className="bg-[#1e3541] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-collection-1-brandbglighter w-[1512px] h-[982px] relative">
        <div className="w-[995px] top-[211px] left-[259px] font-extrabold text-[#f08d5a] text-[67px] text-center absolute">
          Create account
        </div>
        <div className="absolute w-[400px] h-[52px] top-[356px] left-[558px]">
          <input
            className="w-full h-full bg-transparent border-b-2 border-collection-1-brandtextwhite text-collection-1-brandtextwhite text-base pl-[15px] placeholder-white"
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="absolute w-[400px] h-[52px] top-[434px] left-[558px]">
          <input
            className="w-full h-full bg-transparent border-b-2 border-collection-1-brandtextwhite text-collection-1-brandtextwhite text-base pl-[15px] placeholder-white"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="absolute w-[400px] h-[52px] top-[506px] left-[558px]">
          <input
            className="w-full h-full bg-transparent border-b-2 border-collection-1-brandtextwhite text-collection-1-brandtextwhite text-base pl-[15px] placeholder-white"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <BiHide className="absolute top-[13px] right-[15px] text-collection-1-brandtextwhite" />
        </div>
        <div className="absolute w-[265px] h-[101px] top-[601px] left-[627px] bg-[#F08D5A] rounded-lg">
           <button
            type="button"
            className="w-full h-full bg-collection-1-brandtextorange rounded-lg text-black text-[32px] font-bold"
            onClick={handleSubmit}
          >
            Create user
          </button>
        </div>
        <p className="absolute w-[398px] top-[725px] left-[558px] font-normal text-[22px] text-center text-transparent">
          <span className="text-[#f08d5a]">Already have a user?</span>
          <span className="text-[#626262]">&nbsp;</span>
          <Link to="/login" className="font-semibold text-white">Sign in here!</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterUser;
