import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Mauricio
                <br className="hidden lg:inline-block" />Sr Software Engineer - Product Technical Owner
              </h1>
              <p className="mb-8 leading-relaxed">
              Worked as a <b>Software Engineer</b> for over +5 years. My professional goal is to continue growing professionally in the field of software development facing new challenges and improving my leadership skills. <b>I'm passionate about technology!</b>
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="items-center inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Contact
                </a>
                <a
                  href="https://drive.google.com/file/d/1trNpE6-hj-bt4ZTeXVw2glRCmhe6Jih2/view?usp=sharing"
                  className="ml-4 inline-flex items-center text-gray-400 bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  My Resume
                  <ArrowDownTrayIcon className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./google_logo.svg"
              />
            </div>
          </div>
        </section>
      );
}