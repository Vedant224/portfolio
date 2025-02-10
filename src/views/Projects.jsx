import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const projectList = [
    {
      title: "Cryptofy",
      description: "Real-time cryptocurrency tracking app with chart using React.",
      imageUrl: "/crypto.png",
      projectLink: "https://crytopfy.vercel.app/",
    },
    {
      title: "NoteSaver",
      description: "A note-taking app with LocalStorage support.",
      imageUrl: "/notes.png",
      projectLink: "https://notessaver-ruddy.vercel.app/",
    },
    {
      title: "Student Dashboard",
      description: "A student dashboard management with admin authentication.",
      imageUrl: "/student.png",
      projectLink: "https://students-sigma-henna.vercel.app/",
    },
    {
      title: "Asset Manager",
      description: "A team project built using HTML, CSS, JavaScript, and MongoDB.",
      imageUrl: "/asset.png",
      projectLink: "https://assetmanager-one.vercel.app/index.html",
    },
    {
      title: "Quiz",
      description: "A Quiz app with gamification elements.",
      imageUrl: "/quiz.png",
      projectLink: "https://github.com/Vedant224/Quiz-app",
    },
  ];

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">Projects</h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          {projectList.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectLink={project.projectLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
