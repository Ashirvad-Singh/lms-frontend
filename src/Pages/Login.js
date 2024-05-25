import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import { login } from "../Redux/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!loginData.email || !loginData.password) {
      toast.error("Please fill all the fields");
      return;
    }

    const res = await dispatch(login(loginData));

    if (res?.payload?.success) navigate("/");

    setLoginData({
      email: "",
      password: "",
    });
  };

  return (
    <Layout>
      <div className="login-container flex items-center justify-center h-screen bg-gray-900">
        <form
          onSubmit={handleLogin}
          className="login-form flex flex-col justify-center gap-4 rounded-lg p-4 text-white shadow-md max-w-md"
        >
          <h1 className="login-title text-center text-2xl font-bold">Login Page</h1>
          <div className="login-input flex flex-col gap-1">
            <label className="login-label text-base font-semibold" htmlFor="email">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="login-input-field bg-transparent px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={loginData.email}
              onChange={handleUserInput}
            />
          </div>

          <div className="login-input flex flex-col gap-1">
            <label className="login-label text-base font-semibold" htmlFor="password">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="login-input-field bg-transparent px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={loginData.password}
              onChange={handleUserInput}
            />
          </div>

          <div
            onClick={() =>
              setLoginData({ email: "test@gmail.com", password: "Test@123" })
            }
            className="login-guest text-center text-accent cursor-pointer text-sm"
          >
            Guest Login
          </div>

          <button
            className="login-button w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-2 rounded-md transition duration-300 ease-in-out"
            type="submit"
          >
            Login
          </button>

          <Link to={"/forgetpassword"}>
            <p className="login-forget-password text-center text-accent cursor-pointer text-sm">
              Forget Password
            </p>
          </Link>

          <p className="login-signup text-center text-sm">
            Don't have an account ?{" "}
            <Link to={"/signup"} className="link text-accent cursor-pointer">
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
