import React from "react";
import "./projects.css";

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_details: false,
    };
    this.url = this.props.backgroundURL;
    this.position = this.props.position;
  }

  showDetail(e) {
    e.target.classList.add("slide-right");
    e.target.nextElementSibling.classList.add("slide-left");
    closeProjects(this.position);
  }

  render() {
    return (
      <div
        style={{
          width: "60%",
          margin: "2rem auto",
          height: "250px",
          borderRadius: "30px",
          display: "flex",
          position: "relative",
          backgroundColor: "transparent",
        }}
        position={this.position}
        className="project"
      >
        <img
          className="project-image"
          src={this.url}
          alt="project"
          height="250px"
          style={{
            margin: "0 auto",
            borderRadius: "20px",
            position: "absolute",
            left: "25%",
            zIndex: "4",
          }}
          onMouseEnter={(e) => this.showDetail(e)}
        ></img>
        <div
          style={{
            height: "250px",
            backgroundColor: "#272c45",
            width: "60%",
            position: "absolute",
            left: "25%",
            zIndex: "2",
            borderRadius: "20px",
          }}
          className="project-detail"
        >
          This is a test
        </div>
      </div>
    );
  }
}

function closeProjects(exception) {
  console.log(exception);
  const projects = document.getElementsByClassName("project");
  for (let i = 0; i < projects.length; i++) {
    const project = projects.item(i);
    const image_and_details = project.children;
    if (exception !== project.getAttribute("position")) {
      image_and_details.item(0).classList.remove("slide-right");
      image_and_details.item(1).classList.remove("slide-left");
    }
  }
}

function Projects(props) {
  return (
    <div id="projects" className="page" onMouseLeave={() => closeProjects(-1)}>
      <ProjectCard backgroundURL="/assets/images/aboutme.jpg" position="0"/>
      <ProjectCard backgroundURL="/assets/images/test.jpg" position="1"/>
    </div>
  );
}

export default Projects;
