import React from "react";
import Layout from "../Layout/Layout";
import aboutMainImage from "../Assets/Images/aboutMainImage.png";
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
          {/* Our moto section */}
          <section className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl text-yellow-500 font-semibold">
              Affordable and Quality Education
            </h1>
            <p className="text-base lg:text-xl text-gray-200">
              Our goal is to provide affordable and quality education to the
              world. We are providing a platform for aspiring teachers and
              students to share their creativity, skills, and knowledge to
              empower and contribute to the growth and wellness of mankind.
            </p>
          </section>

          {/* Our moto image section */}
          <div className="w-full lg:w-1/2">
            <img
              style={{
                filter: "drop-shadow(0px 10px 10px rgb(0, 0, 0))",
              }}
              className="drop-shadow-2xl w-full h-auto"
              src={aboutMainImage}
              alt="aboutMainImage"
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
                "Education is the most powerful tool you can use to change the world.",
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
    </Layout>
  );
};

export default About;
