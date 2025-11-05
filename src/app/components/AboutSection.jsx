"use client";
import React, { useTransition, useState } from "react";

import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="space-y-3">
        <li className="flex items-center">
          <svg className="w-4 h-4 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <a 
            href="https://drive.google.com/file/d/1EGUM4k0aTAphiZBnTGOOkL2dq0Hv7Fb2/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200 cursor-pointer"
          >
            Front-End Web Development - University of Moratuwa
          </a>
        </li>
        <li className="flex items-center">
          <svg className="w-4 h-4 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <a 
            href="https://drive.google.com/file/d/17ToP1F_kx1ZnDKFF5aykmJBEmBxlrSJQ/view?usp=sharing_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200 cursor-pointer"
          >
            Web Design for Beginners - University of Moratuwa
          </a>
        </li>
        <li className="flex items-center">
          <svg className="w-4 h-4 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <a 
            href="https://www.sololearn.com/en/certificates/CC-OKE7XOMK" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200 cursor-pointer"
          >
            Python Developer - Sololearn
          </a>
        </li>
        <li className="flex items-center">
          <svg className="w-4 h-4 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <a 
            href="https://learn.kodekloud.com/certificate/b487ff3e-4996-4d2a-a140-aabdeeb95c73" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200 cursor-pointer"
          >
            Postman Essentials
          </a>
        </li>
        <li className="flex items-center">
          <svg className="w-4 h-4 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <a 
            href="https://drive.google.com/file/d/1iXb89rkfBd9dTcFJJoEYpmHmB0o_WM9e/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200 cursor-pointer"
          >
            Postman API Fundamentals Student Expert
          </a>
        </li>
      </ul>
    ),
  },
];

const EDUCATION_DATA = [
  {
    title: "GCE Ordinary level examination",
    institution: "Mo/Mahanama Central College",
    year: "2016",
    description: "Completed GCE O/L with 8A's & 1B",
    color: "bg-blue-500",
  },
  {
    title: "GCE Advanced level examination",
    institution: "Mo/Mahanama Central College",
    year: "2021",
    description: "Completed GCE A/L with  3C's",
    color: "bg-green-500",
  },
  {
    title: "BSc. (Hons) in Computing & Information Systems",
    institution: "Sabaragamuwa University of Sri Lanka",
    year: "2023",
    description: "Reading",
    color: "bg-purple-500",
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("certifications");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white pt-20" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Left Column - About Me & Tabs */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg mb-8">
            I am a motivated and detail-oriented software developer with a 
            strong interest in creating efficient, reliable, and user-centered digital solutions. 
            My focus lies in leveraging modern web technologies to solve real-world challenges and deliver meaningful value to users. 
            I am currently seeking an internship opportunity where I can apply my technical expertise, contribute to innovative projects, and
             continue developing as a skilled and dedicated professional in the software industry.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>

        {/* Right Column - Education Timeline */}
        <div className="mt-8 md:mt-0">
          <h3 className="text-3xl font-bold text-white mb-12 text-center lg:text-left">My Developer Journey</h3>
          <div className="relative pl-8">
            {/* Main Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-linear-to-b from-blue-800 via-green-500 to-purple-500 rounded-full shadow-lg"></div>
            
            {EDUCATION_DATA.map((item, index) => (
              <div key={index} className="relative mb-12 ml-8">
                {/* Large Timeline Dot */}
                <div className={`absolute -left-12 w-8 h-8 rounded-full ${item.color} border-4 border-white shadow-xl z-10`}></div>

                {/* Inner Timeline Dot */}
                <div className="absolute -left-10 w-4 h-4 bg-white rounded-full z-20"></div>

                {/* Timeline Card */}
                <div className="bg-linear-to-br from-gray-800 to-gray-900 border border-gray-600 rounded-xl p-6 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 ml-6">
                  {/* Year Badge */}
                  <div className="flex justify-end mb-3">
                    <span className={`${item.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                      {item.year}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-white leading-tight">{item.title}</h4>
                    <p className="text-blue-400 font-semibold text-lg flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" clipRule="evenodd" />
                      </svg>
                      {item.institution}
                    </p>
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full ${item.color} mr-3`}></div>
                      <p className="text-gray-300 font-medium">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Bottom Accent Line */}
                  <div className={`h-1 w-full ${item.color} rounded-full mt-4 opacity-30`}></div>
                </div>
              </div>
            ))}
            
            {/* Bottom Timeline Cap */}
            <div className="absolute left-6 -bottom-2 w-5 h-5 bg-blue-950 rounded-full border-4 border-white shadow-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;