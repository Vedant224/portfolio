import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const projectList = [
    {
      title: "Cryptofy",
      description: "Developed a real-time cryptocurrency tracking app using React. Integrated a cryptocurrency API to fetch and display live market data. Implemented Google React Charts to visualize price trends.",
      imageUrl: "/crypto.png",
      projectLink: "https://crytopfy.vercel.app/",
    },
    {
      title: "NoteSaver",
      description: "A notes saver which include creating, editing, deleting, copying, and adding descriptions to notes. Utilized LocalStorage for persistent data storage in the browser.",
      imageUrl: "/notes.png",
      projectLink: "https://notessaver-ruddy.vercel.app/",
    },
    {
      title: "Student Dashboard",
      description: "Implemented authentication using Firebase, allowing only admin@123.com to sign in. Built a real-time Firestore database for adding and managing student records. Designed UI with Material Kit UI, ensuring a modern and responsive layout. Added a secure logout feature preventing access without reauthentication.",
      imageUrl: "/student.png",
      projectLink: "https://students-sigma-henna.vercel.app/",
    },
    {
      title: "Asset Manager",
      description: "Developed a web-based asset management system for storing and managing item data. Used MongoDB for efficient data storage and retrieval. Built the frontend with HTML, CSS, and JavaScript for a responsive UI. Enabled users to add, edit, and delete asset records.",
      imageUrl: "/asset.png",
      projectLink: "https://assetmanager-one.vercel.app/index.html",
    },
    {
      title: "Quiz",
      description: "Developed a web-based quiz application with an engaging UI and gamification features. Integrated an external API to fetch and present dynamic quiz questions. Implemented an intuitive user interface for smooth navigation and interaction. Ensured a responsive and mobile-friendly design for accessibility across devices.",
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
