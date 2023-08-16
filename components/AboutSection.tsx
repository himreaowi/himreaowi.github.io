import React from "react";
import Image from "next/image";
const skills = [
  { skill: "JavaScript" },
  { skill: "ReactJS" },
  { skill: "React Native" },
  { skill: "Redux" },
  { skill: "ExpressJS" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Python" },
  { skill: "C/C++" },
  { skill: "Java" },
  { skill: "MySQL" },
];
const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-rose-500 dark:bg-indigo-600 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Himari and I am an aspiring software engineer based
              in Singapore!
            </p>
            <br />
            <p>
              I am currently a final year Computer Science student at Nanyang
              Technological University and have been working as a software
              engineer intern for 2 years. Having a strong passion for frontend
              development, I look forward to building products that can enrich
              user experience and impact others!
            </p>
            <br />
            <p>
              I also have a wide range of hobbies that keep me busy. I enjoy
              reading, jogging and playing the trumpet in my own free time!
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              className="hidden md:block md: relative md:bottom-4 md:left-32 md:z-0"
              src="/hero-image.png"
              alt=""
              width={325}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
