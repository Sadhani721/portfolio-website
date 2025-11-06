"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Cake Website",
    description: "A static cake shop website built with HTML and CSS, designed to showcase a variety of cakes and pastries. Developed to strengthen core front-end and responsive web design skills.",
    image: "/images/projects/Cake.png",
    technologies: ["HTML", "CSS"],
    gitUrl: "https://github.com/Sadhani721/Cake_Website",
    previewUrl: "https://travellk-demo.netlify.app",
  },
  {
    id: 2,
    title: "Construction Website",
    description: "Created a responsive construction company website showcasing projects and services with contact options, enhancing client engagement through an interactive interface.",
    image: "/images/projects/Construction.png",
    technologies: ["React", "Bootstrap", "Laravel", "MySQL"],
    gitUrl: "https://github.com/Sadhani721/ConstructionWebproject",
    previewUrl: "https://drive.google.com/file/d/1xnEseoipPRj3OWIOCfWBlZ9HoLtkvIS4/view?usp=sharing",
  },
  {
    id: 3,
    title: "Products CRUD project",
    description: "Developed a simple CRUD application for an electric shop to manage products, update inventory, and streamline daily shop operations efficiently.",
    image: "/images/projects/CRUD.png",
    technologies: ["Laravel", "MySQL"],
    gitUrl: "https://github.com/yourusername/ecommerce-platform",
    previewUrl: "https://drive.google.com/file/d/1r-aSXfn2ARoEAbl-r6oq-OAxF_x3c33L/view?usp=sharing",
  },
  {
    id: 4,
    title: "StockGuard",
    description: "Developed a smart IoT-based inventory management system with real-time stock monitoring, automated low-stock alerts, and remote web dashboard tracking.",
    image: "/images/projects/Stockgaud.png",
    technologies: ["Arduino", "Firebase", "PHP"],
    gitUrl: "https://github.com/krishaCode/capstone_project.git",
    previewUrl: "https://drive.google.com/file/d/1F8nUiSEtK9zddDKjJPUgUrCqWE5cRs6e/view?usp=sharing",
  },
  {
    id: 5,
    title: "MediTrackSUSL",
    description: "Built a system to automate prescription management and medicine stock tracking for the university medical  center.",
    image: "/images/projects/Picture1.png",
    technologies: ["Laravel 8", "PHP 7", "Bootsrap", "Docker"],
    gitUrl: "https://github.com/kavindalj/MediTrack_SUSL",
    previewUrl: "https://drive.google.com/file/d/196Sb6jn-WivjRigwWCU-17-mjlb8_5Iz/view?usp=sharing",
  },
  {
    id: 6,
    title: "My portfolio Website",
    description: "An interactive full-stack development roadmap with progress tracking, resources, and learning paths. Helps developers navigate their learning journey effectively.",
    image: "/images/projects/6.png",
    technologies: ["Next.js", "JavaScript","React"],
    gitUrl: "https://github.com/Sadhani721/portfolio-website",
    previewUrl: "https://portfolio-website-olive-two-97.vercel.app/",
  }
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Show all projects since we removed the filtering
  const filteredProjects = projectsData;

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="pt-20">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 font-montserrat tracking-wide">
        My Projects
      </h2>

      <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              technologies={project.technologies}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;