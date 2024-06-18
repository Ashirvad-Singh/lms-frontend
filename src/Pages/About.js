import React from "react";
import Layout from "../Layout/Layout";
import aboutMainImage from "../Assets/Images/aboutMainImage.png";
import courseImage from "../Assets/Images/download.png";
import apj from "../Assets/Images/QuotesPersonalityImage/apj.png";
import billGates from "../Assets/Images/QuotesPersonalityImage/billGates.png";
import einstein from "../Assets/Images/QuotesPersonalityImage/einstein.png";
import nelsonMandela from "../Assets/Images/QuotesPersonalityImage/nelsonMandela.png";
import steveJobs from "../Assets/Images/QuotesPersonalityImage/steveJobs.png";

const About = () => {
  return (
    <Layout>
      <div className="bg-gray-900 px-4 pt-10 flex flex-col text-white">
        {/* Creating the about page main section */}
        <div className="flex flex-col lg:flex-row items-center gap-5 mx-4 lg:mx-10">
          {/* Our motto section */}
          <section className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl text-yellow-500 font-semibold">
              Affordable and Quality Education
            </h1>
            <p className="text-base lg:text-xl text-gray-200">
              Our goal is to provide affordable and quality education to the
              world. We offer a platform for aspiring teachers and students to
              share their creativity, skills, and knowledge, empowering them to
              contribute to the growth and well-being of society.
            </p>
          </section>

          {/* Our motto image section */}
          <div className="w-full lg:w-1/2">
            <img
              style={{
                filter: "drop-shadow(0px 10px 10px rgb(0, 0, 0))",
              }}
              className="drop-shadow-2xl w-full h-auto"
              src={aboutMainImage}
              alt="About Us"
            />
          </div>
        </div>

        {/* Top personalities quotes section */}
        <div className="carousel m-auto w-full lg:w-1/2 my-16">
          {[
            {
              id: "slide1",
              image: nelsonMandela,
              quote:
                "Education is the most powerful weapon which you can use to change the world.",
              name: "Nelson Mandela",
            },
            {
              id: "slide2",
              image: apj,
              quote:
                "Learning gives creativity, creativity leads to thinking, thinking provides knowledge, knowledge makes you great.",
              name: "A. P. J. Abdul Kalam",
            },
            {
              id: "slide3",
              image: einstein,
              quote:
                "Education is not the learning of facts, but the training of the mind to think.",
              name: "Albert Einstein",
            },
            {
              id: "slide4",
              image: steveJobs,
              quote:
                "Innovation distinguishes between a leader and a follower.",
              name: "Steve Jobs",
            },
            {
              id: "slide5",
              image: billGates,
              quote:
                "Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important.",
              name: "Bill Gates",
            },
          ].map((slide, index) => (
            <div
              key={slide.id}
              id={slide.id}
              className="carousel-item relative w-full"
            >
              <div className="flex flex-col items-center justify-center gap-4 px-[10%] lg:px-[15%]">
                <img
                  className="w-40 rounded-full border-2 border-gray-400"
                  src={slide.image}
                  alt={slide.name}
                />
                <p className="text-base lg:text-xl text-gray-200">
                  {slide.quote}
                </p>
                <h3 className="text-xl lg:text-2xl font-semibold">
                  {slide.name}
                </h3>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href={`#${index === 0 ? "slide5" : `slide${index}`}`}
                  className="btn btn-circle"
                >
                  ❮
                </a>
                <a
                  href={`#${index === 4 ? "slide1" : `slide${index + 2}`}`}
                  className="btn btn-circle"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Courses Section */}
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Our Courses</h1>
              <div className="h-1 w-20 bg-yellow-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-200">Explore our diverse range of courses designed to equip you with the skills and knowledge necessary for success in today's competitive world.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={courseImage} alt="content"/>
                <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">PROGRAMMING</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">Web Development</h2>
                <p className="leading-relaxed text-base text-gray-200">Learn the fundamentals of web development, including HTML, CSS, JavaScript, and popular frameworks.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={courseImage} alt="content"/>
                <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">DESIGN</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">Graphic Design</h2>
                <p className="leading-relaxed text-base text-gray-200">Master the principles of design and learn how to create visually appealing graphics using industry-standard tools.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={courseImage} alt="content"/>
                <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">DATA SCIENCE</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">Data Analysis</h2>
                <p className="leading-relaxed text-base text-gray-200">Gain insights into data analysis techniques, statistical methods, and tools like Python and R.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={courseImage} alt="content"/>
                <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">BUSINESS</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">Entrepreneurship</h2>
                <p className="leading-relaxed text-base text-gray-200">Learn the essentials of starting and running a successful business, from ideation to execution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

