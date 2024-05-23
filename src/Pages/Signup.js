import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import { BsPersonCircle } from "react-icons/bs";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { createAccount } from "../Redux/authSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [previewImage, setImagePreview] = useState("");

  // for user input
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    avatar: "",
  });

  // function to set the signup data
  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  // function to handle the image upload
  const getImage = (event) => {
    event.preventDefault();
    // getting the image
    const uploadedImage = event.target.files[0];

    // if image exists then getting the url link of it
    if (uploadedImage) {
      setSignupData({
        ...signupData,
        avatar: uploadedImage,
      });
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadedImage);
      fileReader.addEventListener("load", function () {
        setImagePreview(this.result);
      });
    }
  };

  // function to create account
  const createNewAccount = async (event) => {
    event.preventDefault();

    // checking the empty fields
    if (
      !signupData.avatar ||
      !signupData.email ||
      !signupData.fullName ||
      !signupData.password
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    // checking the name field length
    if (signupData.fullName.length < 5) {
      toast.error("Name should be atleast of 5 characters");
      return;
    }

    // email validation using regex
    if (
      !signupData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      toast.error("Invalid email id");
      return;
    }

    // password validation using regex
    if (!signupData.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)) {
      toast.error(
        "Minimum password length should be 8 with Uppercase, Lowercase, Number and Symbol"
      );
      return;
    }

    // creating the form data from the existing data
    const formData = new FormData();
    formData.append("fullName", signupData.fullName);
    formData.append("email", signupData.email);
    formData.append("password", signupData.password);
    formData.append("avatar", signupData.avatar);

    // calling create account action
    const res = await dispatch(createAccount(formData));

    // redirect to login page if true
    if (res.payload.success) navigate("/login");

    // clearing the signup inputs
    setSignupData({
      fullName: "",
      email: "",
      password: "",
      avatar: "",
    });
    setImagePreview("");
  };

  return (
    <Layout>
     <div class="registration-container flex items-center justify-center h-screen bg-gray-900">
  <form
    onSubmit={createNewAccount}
    class="registration-form flex flex-col justify-center gap-3 rounded-lg p-4 text-white shadow-md max-w-md"
  >
    <h1 class="text-center text-2xl font-bold">Registration Page</h1>

    <div class="profile-picture flex justify-center items-center mb-4">
      <label for="image_uploads" class="cursor-pointer relative">
        {previewImage ? (
          <img
            class="w-24 h-24 rounded-full object-cover"
            src={previewImage}
            alt="preview image"
          />
        ) : (
          <BsPersonCircle class="w-24 h-24 rounded-full object-cover bg-gray-200" />
        )}
        <input
          type="file"
          id="image_uploads"
          name="image_uploads"
          accept=".jpg, .jpeg, .png"
          class="hidden absolute top-0 left-0 w-full h-full opacity-0"
          onChange={getImage}
        />
        <div class="text-xs text-center absolute bottom-2 right-2 bg-gray-900 hover:bg-gray-700 rounded-full px-2 py-1 text-white opacity-0 hover:opacity-100">
          Upload Photo
        </div>
      </label>
    </div>

    <div class="flex flex-col gap-2">
      <label for="fullName" class="font-semibold text-base">Name</label>
      <input
        required
        type="text"
        name="fullName"
        id="fullName"
        placeholder="Enter your name"
        class="bg-transparent px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-blue-500"
        value={signupData.fullName}
        onChange={handleUserInput}
      />

      <label for="email" class="font-semibold text-base">Email</label>
      <input
        required
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        class="bg-transparent px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-blue-500"
        value={signupData.email}
        onChange={handleUserInput}
      />

      <label for="password" class="font-semibold text-base">Password</label>
      <input
        required
        type="password"
        name="password"
        id="password"
        placeholder="Enter your password"
        class="bg-transparent px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-blue-500"
        value={signupData.password}
        onChange={handleUserInput}
      />
    </div>

    <button
      type="submit"
      class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-2 rounded-md transition duration-300 ease-in-out"
    >
      Create Account
    </button>

    <p class="text-center text-sm mt-4">
      Already have an account?
      <Link to={"/login"} class="text-blue-600 hover:underline">
        Login
      </Link>
    </p>
  </form>
</div>

    </Layout>
  );
};

export default Signup;
