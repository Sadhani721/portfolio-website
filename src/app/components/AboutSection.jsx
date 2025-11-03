"use client";
import React, { useTransition, useState } from "react";

import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Front-End Web Development- University of Moratuwa</li>
        <li>Web Design for Beginners - University of Moratuwa</li>
        <li>Python Developer - Sololearn</li>
        <li>Postman Essentials</li>
        <li>Postman API Fundamentals Student Expert</li>

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
  const [tab, setTab] = useState("skills");
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
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
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
          <h3 className="text-3xl font-bold text-white mb-8">My Developer Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-600"></div>
            
            {EDUCATION_DATA.map((item, index) => (
              <div key={index} className="relative mb-8 ml-16">
                {/* Timeline Icon */}
                <div className={`absolute -left-12 w-12 h-12 rounded-full ${item.color} flex items-center justify-center`}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" clipRule="evenodd" />
                  </svg>
                </div>
                
                {/* Timeline Card */}
                <div className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                    <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-blue-400 font-medium mb-2">{item.institution}</p>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;