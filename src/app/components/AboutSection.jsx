"use client";
import React, { useTransition, useState } from "react";

import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="grid grid-cols-1 gap-2">
        {/* Front-End Web Development */}
        <a 
          href="https://drive.google.com/file/d/1EGUM4k0aTAphiZBnTGOOkL2dq0Hv7Fb2/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-[#1a1a2e] border border-[#2a2a4e] rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-200 group"
        >
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors">Front-End Web Development</p>
            <p className="text-gray-400 text-xs">University of Moratuwa</p>
          </div>
          <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        {/* Web Design for Beginners */}
        <a 
          href="https://drive.google.com/file/d/17ToP1F_kx1ZnDKFF5aykmJBEmBxlrSJQ/view?usp=sharing_" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-[#1a1a2e] border border-[#2a2a4e] rounded-lg hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-200 group"
        >
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM8 8h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"/>
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-white font-medium text-sm group-hover:text-purple-300 transition-colors">Web Design for Beginners</p>
            <p className="text-gray-400 text-xs">University of Moratuwa</p>
          </div>
          <svg className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        {/* Python Developer */}
        <a 
          href="https://www.sololearn.com/en/certificates/CC-OKE7XOMK" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-[#1a1a2e] border border-[#2a2a4e] rounded-lg hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-200 group"
        >
          <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05-.63-.13-.26-.21-.24-.29-.21-.32-.15-.33-.08-.31-.02H14l-.01 2.03.05 2.98.13.76.3.6.45.44.56.3.62.17.64.05h.33c2.14 0 4.01-1.01 4.75-2.55l.06-.17c.02-.04.04-.08.07-.13l.02-.08c.04-.13.08-.26.1-.4l.02-.2v-1.88c0-.37.02-.74 0-1.1-.02-.39-.06-.77-.12-1.15l-.1-.5-.17-.46-.27-.41-.37-.35-.46-.27-.53-.18-.58-.09-.62-.02h-.3l-.1.04H14.25zm7.06 10.88l-.29-.48c-.18-.25-.37-.49-.59-.7-.32-.32-.68-.6-1.07-.83-.4-.22-.83-.39-1.28-.5-.46-.12-.93-.17-1.41-.15H16.8c-.04.02-.08.04-.12.07-.33.18-.64.41-.91.68-.27.27-.5.57-.69.89-.18.32-.32.66-.42 1.01-.1.35-.15.71-.16 1.07v.57l.03.56.08.55.13.54.19.52.25.5.31.48.37.45.44.42.51.38.58.34.65.29.72.24.79.18.86.12.94.06h.46c.35 0 .7-.03 1.04-.08.35-.05.69-.12 1.02-.21.33-.09.65-.2.96-.33.31-.13.6-.28.88-.45l.05-.03c.03-.02.06-.05.09-.08.03-.03.06-.06.08-.1.02-.03.04-.07.05-.1.02-.04.03-.08.04-.12 0-.02 0-.04.01-.06 0-.04-.01-.08-.03-.12-.02-.04-.05-.08-.09-.11-.04-.03-.08-.05-.13-.06h-.33c-.19 0-.38.02-.57.04-.19.02-.38.05-.57.09-.18.04-.37.09-.55.15-.19.06-.37.13-.56.21-.32.14-.62.32-.9.53-.28.21-.53.45-.76.71-.11.13-.21.27-.3.41-.05.07-.09.14-.13.22-.02.04-.04.08-.05.12-.01.02-.02.04-.02.06 0 .04.02.08.04.12.03.04.07.07.11.09.04.02.09.03.13.03h.2c.15 0 .3-.03.44-.08.14-.05.27-.12.39-.21.12-.09.23-.19.32-.3.09-.11.16-.23.21-.36.05-.13.07-.27.07-.41v-.3c0-.07-.01-.14-.03-.2-.02-.07-.05-.13-.09-.19-.04-.06-.09-.11-.15-.15-.06-.04-.13-.07-.2-.08h-.15c-.04 0-.08.01-.12.03-.04.02-.07.05-.1.08-.03.03-.05.07-.06.11-.01.04-.01.08 0 .12.01.04.03.08.06.11.03.03.07.05.11.06h.08c.02 0 .04-.01.06-.02.02-.01.04-.03.05-.05.01-.02.02-.04.02-.06 0-.02-.01-.04-.02-.06-.01-.02-.03-.04-.05-.05-.02-.01-.04-.02-.06-.02h-.08c-.04-.01-.08-.02-.11-.04-.04-.02-.07-.05-.1-.08-.03-.03-.05-.07-.06-.11-.01-.04-.01-.08 0-.12.01-.04.03-.08.06-.11.03-.03.07-.05.11-.06.04-.01.08-.01.12 0h.15c.07.01.14.04.2.08.06.04.11.09.15.15.04.06.07.12.09.19.02.06.03.13.03.2v.3c0 .14-.02.28-.07.41-.05.13-.12.25-.21.36-.09.11-.2.21-.32.3-.12.09-.25.16-.39.21-.14.05-.29.08-.44.08h-.2c-.04 0-.09-.01-.13-.03-.04-.02-.08-.05-.11-.09-.02-.04-.04-.08-.04-.12 0-.02.01-.04.02-.06.01-.04.03-.08.05-.12.04-.08.08-.15.13-.22.09-.14.19-.28.3-.41.23-.26.48-.5.76-.71.28-.21.58-.39.9-.53.19-.08.37-.15.56-.21.18-.06.37-.11.55-.15.19-.04.38-.07.57-.09.19-.02.38-.04.57-.04h.33c.05.01.09.03.13.06.04.03.07.07.09.11.02.04.03.08.03.12 0 .02-.01.04-.01.06-.01.04-.02.08-.04.12-.01.03-.03.07-.05.1-.02.04-.05.07-.08.1-.03.03-.06.06-.09.08l-.05.03c-.28.17-.57.32-.88.45-.31.13-.63.24-.96.33-.33.09-.67.16-1.02.21-.34.05-.69.08-1.04.08h-.46c-.32-.02-.64-.06-.94-.12-.29-.06-.58-.14-.86-.24-.28-.1-.55-.22-.81-.36-.26-.14-.51-.3-.74-.48-.23-.18-.45-.38-.65-.6-.2-.22-.38-.46-.54-.71-.16-.25-.3-.52-.42-.8-.12-.28-.21-.57-.28-.87-.07-.3-.11-.61-.13-.92v-.57c.01-.36.06-.72.16-1.07.1-.35.24-.69.42-1.01.19-.32.42-.62.69-.89.27-.27.58-.5.91-.68.04-.03.08-.05.12-.07h.01c.48-.02.95.03 1.41.15.45.11.88.28 1.28.5.39.23.75.51 1.07.83.22.21.41.45.59.7l.29.48h.48c.12 0 .24-.04.34-.11.1-.07.18-.17.22-.28.04-.11.04-.23 0-.34-.04-.11-.12-.21-.22-.28-.1-.07-.22-.11-.34-.11h-.48z"/>
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-white font-medium text-sm group-hover:text-yellow-300 transition-colors">Python Developer</p>
            <p className="text-gray-400 text-xs">Sololearn</p>
          </div>
          <svg className="w-4 h-4 text-gray-400 group-hover:text-yellow-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        {/* Postman Essentials */}
        <a 
          href="https://learn.kodekloud.com/certificate/b487ff3e-4996-4d2a-a140-aabdeeb95c73" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-[#1a1a2e] border border-[#2a2a4e] rounded-lg hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-200 group"
        >
          <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zM15.026 5.76c.58-.004 1.05.47 1.05 1.05-.001.58-.475 1.05-1.055 1.05-.58.005-1.05-.47-1.05-1.05.001-.58.475-1.05 1.055-1.05zm-2.105 0c.58-.004 1.05.47 1.05 1.05-.001.58-.475 1.05-1.055 1.05-.58.005-1.05-.47-1.05-1.05.001-.58.475-1.05 1.055-1.05zm-2.105 0c.58-.004 1.05.47 1.05 1.05-.001.58-.475 1.05-1.055 1.05-.58.005-1.05-.47-1.05-1.05.001-.58.475-1.05 1.055-1.05zM12 10.485c-.326 0-.59.264-.59.59s.264.59.59.59.59-.264.59-.59-.264-.59-.59-.59zm2.572-4.315c-.323-.5-.878-.823-1.572-.823s-1.249.323-1.572.823c-.323.5-.323 1.146 0 1.647.323.5.878.823 1.572.823s1.249-.323 1.572-.823c.323-.501.323-1.147 0-1.647z"/>
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-white font-medium text-sm group-hover:text-orange-300 transition-colors">Postman Essentials</p>
            <p className="text-gray-400 text-xs">KodeKloud</p>
          </div>
          <svg className="w-4 h-4 text-gray-400 group-hover:text-orange-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        {/* Postman API Fundamentals */}
        <a 
          href="https://drive.google.com/file/d/1iXb89rkfBd9dTcFJJoEYpmHmB0o_WM9e/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-[#1a1a2e] border border-[#2a2a4e] rounded-lg hover:border-green-500 hover:bg-green-500/10 transition-all duration-200 group"
        >
          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zM15.026 5.76c.58-.004 1.05.47 1.05 1.05-.001.58-.475 1.05-1.055 1.05-.58.005-1.05-.47-1.05-1.05.001-.58.475-1.05 1.055-1.05zm-2.105 0c.58-.004 1.05.47 1.05 1.05-.001.58-.475 1.05-1.055 1.05-.58.005-1.05-.47-1.05-1.05.001-.58.475-1.05 1.055-1.05zm-2.105 0c.58-.004 1.05.47 1.05 1.05-.001.58-.475 1.05-1.055 1.05-.58.005-1.05-.47-1.05-1.05.001-.58.475-1.05 1.055-1.05zM12 10.485c-.326 0-.59.264-.59.59s.264.59.59.59.59-.264.59-.59-.264-.59-.59-.59zm2.572-4.315c-.323-.5-.878-.823-1.572-.823s-1.249.323-1.572.823c-.323.5-.323 1.146 0 1.647.323.5.878.823 1.572.823s1.249-.323 1.572-.823c.323-.501.323-1.147 0-1.647z"/>
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-white font-medium text-sm group-hover:text-green-300 transition-colors">Postman API Fundamentals</p>
            <p className="text-gray-400 text-xs">Student Expert</p>
          </div>
          <svg className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
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
        <div className="mt-6 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg mb-8">
            I am a motivated and detail-oriented software developer with a 
            strong interest in creating efficient, reliable, and user-centered digital solutions. 
            My focus lies in leveraging modern web technologies to solve real-world challenges and deliver meaningful value to users. 
            I am currently seeking an internship opportunity where I can apply my technical expertise, contribute to innovative projects, and
             continue developing as a skilled and dedicated professional in the software industry.
          </p>
          <div className="text-3xl font-bold text-white mb-4">
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-2">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>

        {/* Right Column - Education Timeline */}
        <div className="mt-4 md:mt-0">
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