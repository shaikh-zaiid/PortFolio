import React from "react";

const projects = [
  {
    id: 1,
    name: "Cosmos Castle International School 2018-2019 SSC 60%",
    technologies:
      "Completed the SSC from Gujarat Secondary and Higher Secondary Education Board in 2019.",
  },
  {
    id: 2,
    name: "Jeet School Of Winners 2020-2021 HSC 60%",
    technologies:
      "Completed the HSC from Gujarat Secondary and Higher Secondary Education Board in 2021.",
  },
  {
    id: 3,
    name: "Lok Jagruti kendra university BCA 2021-2024",
    technologies:
      "Completed the  BCA(Bachelor of Computer Applications) from Lok Jagruti kendra university 2021-2024",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 "> EDUCATION</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105"
            >
              <h3
                className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500"
              >
                {project.name}
              </h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
