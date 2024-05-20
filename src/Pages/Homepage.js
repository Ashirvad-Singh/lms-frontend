import React from "react";
import Layout from "../Layout/Layout";
import homePageMainImage from "../Assets/Images/_ (1).gif";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <Layout>
      <div className="pt-10 text-white bg-blue-900 flex items-center justify-center   h-auto lg:h-[90vh] flex-col lg:flex-row">
        {/* for platform details */}
        <div className="w-full mx-16 lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-5xl font-semibold">
            Find out the best{" "}
            <span className="text-yellow-500 font-bold">Online Courses</span>
          </h1>
          <p className="text-xl text-gray-200">
            We have a large library of courses taught by highly skilled and
            qualified faculties at a very affordable cost.
          </p>

          {/* for buttons */}
          <div className="space-y-4 lg:space-y-0 lg:space-x-6 flex flex-col lg:flex-row items-center lg:items-start">
            <Link to={"/courses"}>
              <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300 w-full lg:w-auto">
                Explore Courses
              </button>
            </Link>
            <Link to={"/contact"}>
              <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:border-yellow-600 transition-all ease-in-out duration-300 w-full lg:w-auto">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* right section for image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0">
          <img src={homePageMainImage} alt="home page image" className="w-3/4 lg:w-full" />
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
