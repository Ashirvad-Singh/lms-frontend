import React from "react";
import Layout from "../Layout/Layout";
import homePageMainImage from "../Assets/Images/homePageMainImage.png";
import aboutMainImage from "../Assets/Images/_ (1).gif";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

const Homepage = () => {
  return (
    <Layout>
      <div className="pt-10 text-white bg-gray-900 flex items-center justify-center h-auto lg:h-[90vh] flex-col lg:flex-row">
        {/* Platform details */}
        <div className="w-full mx-16 lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-5xl font-semibold leading-20">
            Want to become{" "}
            <br></br>
            <br></br>
            <span className="text-yellow-500 font-bold">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  1000,
                  'Front End Developer',
                  1000,
                  'Back End Developer',
                  1000,
                  'Web Designer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <br></br>
          <p className="text-xl text-gray-200 leading-relaxed">
            Join our platform to access a comprehensive library of courses taught by industry experts. Gain the skills and knowledge you need to excel in your career at an affordable cost.
          </p>

          {/* Buttons */}
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

        {/* Image section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0">
          <img src={homePageMainImage} alt="home page image" className="w-3/4 lg:w-full" />
        </div>
      </div>

      {/* Featured Course Section */}
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img className="object-cover object-center rounded" alt="featured course" src={aboutMainImage} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Learn from the Best
              <br className="hidden lg:inline-block" /> <span className="font-bold text-yellow-500">Industry Experts</span>
            </h1>
            <p className="mb-8 leading-relaxed">Enroll in our top-rated courses to enhance your skills and knowledge. Our expert instructors provide hands-on learning and real-world applications.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Get Started</button>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Our Impact</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We are proud to have helped thousands of learners achieve their professional goals. Join our community and take the next step in your career.</p>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-white">2.7K</h2>
                <p className="leading-relaxed">Downloads</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-white">1.3K</h2>
                <p className="leading-relaxed">Users</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-white">74</h2>
                <p className="leading-relaxed">Courses</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-white">46</h2>
                <p className="leading-relaxed">Instructors</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Homepage;

