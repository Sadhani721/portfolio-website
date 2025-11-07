"use client";
import React from "react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "</>",
      skills: [
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
          name: "HTML5",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        {
          name: "CSS3",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        {
          name: "PHP",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
        },
        {
          name: "Laravel",
          logo: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg"
        },
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        },
        {
          name: "Express.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
        },
        {
          name: "REST API",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
        }
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: [
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        },
        {
          name: "MongoDB",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: [
        {
          name: "GitHub",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        },
        {
          name: "Docker",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
        },
        {
          name: "VS Code",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
        },
        {
          name: "Figma",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        }
      ]
    }
  ];

  return (
    <section className="text-white pt-12 pb-16 px-4" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 font-montserrat tracking-wide">
            Skills & Technologies
          </h3>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl max-w-4xl mx-auto leading-relaxed">
            A comprehensive toolkit for building modern, scalable web applications from concept to deployment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-[#1a1a2e] rounded-xl p-8 border border-[#33353F] hover:border-blue-900 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center p-3 bg-[#1b1f33] rounded-lg hover:bg-[#2d2d2d] transition-colors duration-200 group"
                    >
                      <div className="w-12 h-12 mb-2 flex items-center justify-center">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-200"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div 
                          className="w-10 h-10 bg-purple-600 rounded-lg items-center justify-center text-white font-bold text-sm hidden"
                        >
                          {skill.name.charAt(0)}
                        </div>
                      </div>
                      <span className="text-sm text-center text-[#ADB7BE] group-hover:text-white transition-colors duration-200">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Also Working With Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-400 mb-8">
            Also Working With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Next.js",
              
              "Vite",
              "Bootstrap",
              "Tailwind CSS",
              "Vercel Deployment",
              "RESTful APIs",
              "Agile Methodology",
              "C",
              "Java",
              "Python"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#1a1a2e] border border-[#33353F] rounded-full text-[#ADB7BE] text-sm hover:border-blue-500 hover:text-white transition-all duration-300 hover:bg-[#2a2a3e]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;