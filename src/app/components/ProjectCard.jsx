import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, technologies, gitUrl, previewUrl }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div 
      className="bg-[#1a1a2e] rounded-2xl border border-[#2a2a4e] overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:border-[#4a4a6e] cursor-pointer h-[380px] flex flex-col"
      onClick={handleCardClick}
    >
      {/* Project Image with Hover and Click Overlay */}
      <div className="relative h-40 overflow-hidden group shrink-0">
        <img 
          src={imgUrl} 
          alt={title}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:blur-sm ${
            isClicked ? 'blur-md' : ''
          }`}
        />
        {/* Overlay with buttons that appear on hover or when clicked */}
        <div className={`absolute inset-0  transition-all duration-500 flex items-center justify-center ${
          isClicked 
            ? 'bg-opacity-80 opacity-100' 
            : 'bg-opacity-0 group-hover:bg-opacity-60 opacity-0 group-hover:opacity-100'
        }`}>
          <div className="flex gap-4">
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-lg ${
                isClicked 
                  ? 'translate-y-0' 
                  : 'transform translate-y-4 group-hover:translate-y-0'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <EyeIcon className="w-4 h-4" />
              Live Demo
            </Link>
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 bg-transparent border-2 border-black/70 hover:border-black hover:bg-black/10 text-black px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-lg backdrop-blur-sm ${
                isClicked 
                  ? 'translate-y-0' 
                  : 'transform translate-y-4 group-hover:translate-y-0'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <CodeBracketIcon className="w-4 h-4" />
              GitHub
            </Link>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h2 className="text-xl font-bold text-white mb-3 hover:text-blue-400 transition-colors duration-200 cursor-pointer font-sans">{title}</h2>
        <p className="text-gray-300 text-sm leading-relaxed mb-4 font-sans flex-1">
          {description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies && technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-[#2a2a4a] text-gray-200 px-3 py-1 rounded text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;