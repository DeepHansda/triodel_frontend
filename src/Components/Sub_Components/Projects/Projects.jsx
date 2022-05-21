import React from "react";
import Project from "../../../UI/project/Project";
import "./projects.css";
function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projects-title">
        <h1>Projects</h1>
        <p>
          Node JS is considered as the perfect solution for developing
          data-intesive, real-time web and mobile apps. Based on JavaScript,
          Node JS can be used at the backend, making development simpler and
          easier.
        </p>
      </div>

      <div className="projects-container">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default Projects;
