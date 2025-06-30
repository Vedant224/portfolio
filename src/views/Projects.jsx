import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const projectList = [
    {
      title: "Grainlog",
      description:
        "GrainLog is a real-time dashboard application designed to monitor and visualize grain storage conditions. It integrates live sensor data from CSV files to track key environmental variables such as temperature, humidity, and CO₂ levels. The interface features color-coded visual indicators to represent safe, warning, and danger zones, allowing for quick assessment of storage health. Built with modular and reusable React components, the system ensures a scalable and maintainable UI structure.",
      imageUrl: "/grainlog.png",
      projectLink: "https://grainlog.vercel.app/",
    },
    {
      title: "Cryptofy",
      description:
        "Developed a real-time cryptocurrency tracking app using React. Integrated a cryptocurrency API to fetch and display live market data. Implemented Google React Charts to visualize price trends.",
      imageUrl: "/crypto.png",
      projectLink: "https://crytopfy.vercel.app/",
    },
    
    {
      title: "NoteSaver",
      description:
        "A notes saver which include creating, editing, deleting, copying, and adding descriptions to notes. Utilized LocalStorage for persistent data storage in the browser.",
      imageUrl: "/notes.png",
      projectLink: "https://notessaver-ruddy.vercel.app/",
    },
    {
      title: "Student Dashboard",
      description:
        "Implemented authentication using Firebase, allowing only admin@123.com to sign in. Built a real-time Firestore database for adding and managing student records. Designed UI with Material Kit UI, ensuring a modern and responsive layout. Added a secure logout feature preventing access without reauthentication.",
      imageUrl: "/student.png",
      projectLink: "https://students-sigma-henna.vercel.app/",
    },
    {
      title: "Video",
      description:
        "This is the backend implementation of a YouTube-like video sharing platform, built using Node.js, Express, and MongoDB. It provides a robust and scalable API for handling user authentication, video uploads, media storage, and user/video management.",
      imageUrl: "/video.png",
      projectLink: "https://github.com/Vedant224/video",
    },
  ];

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
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
