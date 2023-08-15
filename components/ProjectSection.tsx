"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from "./SlideUp";

const projects = [
  {
    name: "NTUMoon",
    description:
      "NTUMoon is a web application that helps NTU Undergraduates plan out their timetable for the upcoming semester and leave reviews on modules that they have previously taken.",
    github: "google.com",
  },
  {
    name: "Jarvis",
    description:
      "Jarvis is a password manager application that allows users to manage and generate random passwords. Jarvis relies on vault encryption and decyption to keep a user's passwords safe.",
    github: "google.com",
  },
  {
    name: "Travello",
    description:
      "Travello is an all rounded web application platform for users to plan their trips. Users are able to check tickets for their flights, hotels and also various attractions that they would like to visit in Singapore.",
    github: "google.com",
  },
];
const ProjectSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-rose-500 dark:bg-indigo-600 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-10">
        {projects.map((project, idx) => {
          return (
            <SlideUp offset="-300px 0px -300px 0px" key={idx}>
              <div className="w-full min-h-60 max-h-100 px-7 py-6 mt-12 bg-rose-300 dark:bg-indigo-900 border-0 rounded-2xl shadow animate-slideUpCubBezier animation-delay-2 shadow">
                <h1 className="text-4xl font-bold mb-6 text-rose-900 dark:text-neutral-100">
                  {project.name}
                </h1>
                <p className="text-xl leading-7 mb-4 text-rose-900 dark:text-neutral-100">
                  {project.description}
                </p>
                <div>
                  <Link href={project.github} target="_blank">
                    <BsGithub
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer text-rose-900 dark:text-neutral-100"
                    />
                  </Link>
                </div>
              </div>
            </SlideUp>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
