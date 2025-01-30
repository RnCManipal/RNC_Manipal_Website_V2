import React, { useState } from "react";
import "./Projects.css";
import Header2 from "../Header/Header2";
import { projectList, projectimg } from "../../assets/projects.js";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleReadMoreClick = (project) => {
    setSelectedProject(project);
  };
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      <Header2 title="Project Gallery" subtitle="Welcome to our " />
      <div className="projects">
        <div className="project-container">
          {projectList.map((project, index) => (
            <div className=" project" key={index}>
              <div className="project-title">{project.projectTitle}</div>
              <div className="images">
                
                <div className="iframe-container">
                  <iframe
                    width="300"
                    height="250"
                    src={project.projectUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="project-type">{project.projectType}</div>
              <div
                className="button"
                onClick={() => handleReadMoreClick(project)}
              >
                Read more
              </div>
            </div>
          ))}
        </div>
        <div className="project-container hovercontain">
          {projectimg.map((project, index) => (
            <div className="project project2" key={index}>
              <div className="project-image iframe-container">
              
                <img src={project.imageUrl} alt={project.projectTitle} />
              </div>
              <div className="project-title">{project.projectTitle}</div>
              <div className="project-details">
                <div className="project-type project-type2">
                  {project.projectType}
                </div>
                <div
                  className="button button2"
                  onClick={() => handleReadMoreClick(project)}
                >
                  Read more
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedProject && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>{selectedProject.projectTitle}</h2>
              <p>{selectedProject.info}</p>
              <button className="button-close" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
