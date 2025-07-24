"use client";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FaRegEye, FaRegEyeSlash, FaFacebook } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginAuth from "../../auth/login";
import Loaders from "../GlobalComponents/loaders";

const LoginComp = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const handleClick = () => {
    setValue((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    await LoginAuth(email, password, navigate);
    setIsFetching(false);
  };

  const handleSignUp = () => {
    navigate("/signUp");
  };

  return (
    <>
      {!isFetching && (
        <div className="w-full min-h-screen bg-green-50 flex flex-col pt-32">
          {/* Fixed Header */}
          <header className="fixed top-0 z-10 w-full flex justify-center">
            <img
              src="/Pantrypal.png"
              alt="PantryPalLogin"
              className="w-60 mt-10"
            />
          </header>

          {/* Main Login Container */}
          <form
            onSubmit={handleLogin}
            className="bg-[#F6F6F6] w-full z-50 flex flex-col items-center pt-5 gap-3 rounded-t-4xl shadow-2xl drop-shadow-2xl mt-[6rem] flex-grow"
          >
            <h1 className="text-xl font-semibold">Login</h1>

            <div className="flex flex-col w-full px-5 gap-2">
              {/* EMAIL SECTION */}
              <label htmlFor="email" className="text-[.8rem]">
                Email
              </label>
              <section className="relative">
                <MdOutlineEmail className="absolute top-2 left-5 text-gray-500" />
                <input
                  type="text"
                  id="email"
                  onChange={handleEmailInput}
                  name="email"
                  className="bg-white w-full outline-0 px-2 ps-10 h-8 text-gray-700 rounded-xl"
                  placeholder="you@example.com"
                />
              </section>

              {/* PASSWORD SECTION */}
              <label htmlFor="password" className="text-[.8rem]">
                Password
              </label>
              <section className="relative">
                <TbLockPassword className="absolute top-2 left-5 text-gray-500" />
                <input
                  type={value}
                  id="password"
                  name="password"
                  onChange={handlePasswordInput}
                  className="bg-white w-full outline-0 px-2 ps-10 h-8 text-gray-700 rounded-xl"
                  placeholder="••••••••"
                />
                {value === "password" ? (
                  <FaRegEyeSlash
                    onClick={handleClick}
                    className="absolute top-2 right-5 cursor-pointer"
                  />
                ) : (
                  <FaRegEye
                    onClick={handleClick}
                    className="absolute top-2 right-5 cursor-pointer"
                  />
                )}
              </section>
            </div>

            <div className="flex justify-between w-full px-5 text-[.7rem] mt-2">
              <span className="flex gap-1 items-center">
                <input type="checkbox" className="w-3 accent-black" />
                <label>Remember me</label>
              </span>
              <span>
                <a href="#" className="text-blue-500 hover:underline">
                  Forgot Password?
                </a>
              </span>
            </div>

            <button
              type="submit"
              className="w-[50%] bg-green-500 text-white py-2 rounded-xl mt-4 transition hover:bg-green-600"
            >
              Login
            </button>

            <div className="w-full px-5 my-5">
              <div className="flex items-center">
                <div className="flex-grow h-px bg-gray-300" />
                <span className="px-3 text-[0.7rem] text-gray-600 whitespace-nowrap">
                  Or continue with
                </span>
                <div className="flex-grow h-px bg-gray-300" />
              </div>
            </div>

            {/* Optional: Social Login Buttons */}
            <div className="flex gap-3">
              <button className="px-4 py-4 bg-white rounded-full  shadow border text-sm">
                <FcGoogle className=" text-[1.5rem]" />
              </button>
              <button className="px-4 py-4 bg-white rounded-full shadow border text-sm">
                <FaFacebook className=" text-[1.5rem] text-blue-600" />
              </button>
            </div>
            <p className=" text-[.7rem]">
              Don't have an account?{" "}
              <span onClick={handleSignUp} className=" font-semibold">
                Sign up
              </span>
            </p>
          </form>
        </div>
      )}
      {isFetching && (
        <div className=" flex justify-center items-center h-screen">
          <Loaders />
        </div>
      )}
    </>
  );
};

export default LoginComp;
