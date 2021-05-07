import React from "react";
import "./projects.css";

function openLink(link) {
  window.open(link, "_blank");
}

function CustomButton(props) {
  return (
    <div
      className="view-detail-button"
      onClick={() => {
        openLink(props.link);
      }}
      style={{
        backgroundColor: "#0F0E17",
        width: `calc((100% / ${props.noOfButtons}) - (5px * ${props.noOfButtons})`,
        cursor: "pointer",
        // margin: "0 auto"
      }}
    >
      <label
        style={{
          width: "100%",
          display: "inline-block",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        {props.text}
      </label>
    </div>
  );
}

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_details: false,
    };
    this.url = this.props.details.image;
    this.position = this.props.position;
    this.details = this.props.details;
  }

  showDetail(e) {
    e.target.nextElementSibling.classList.add("show-bottom");
    e.target.nextElementSibling.style.display = "block";
    closeProjects(this.position);
  }

  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "30px",
          backgroundColor: "transparent",
          padding: "10px",
          boxSizing: "border-box"
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
            display: "block",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => this.showDetail(e)}
        ></img>
        <div
          style={{
            height: "250px",
            backgroundColor: "#272c45",
            margin: "3px auto",
            padding: "5px",
            boxSizing: "border-box",
          }}
          className="project-detail"
        >
          <div style={{ position: "relative", height: "inherit" }}>
            <label
              style={{
                display: "inline-block",
                width: "100%",
                textAlign: "center",
                marginTop: "10px",
                fontSize: "1.3rem",
                fontWeight: "bold",
              }}
            >
              {this.details.name}
            </label>
            <hr style={{ width: "80%" }} />

            <p style={{ padding: "0 0.5rem" }}>{this.details.description}</p>
            <div
              style={{ height: "auto", position: "absolute", bottom: "3px" }}
            >
              <label
                style={{
                  display: "inline-block",
                  width: "100%",
                  margin: "0.5rem",
                }}
              >
                <span style={{ fontWeight: "bold" }}>
                  Langauges and Frameworks:{" "}
                </span>
                {this.details.languages_and_frameworks.join(", ")}
              </label>
              <label
                style={{
                  display: "inline-block",
                  width: "100%",
                  margin: "0.5rem",
                }}
              >
                <span style={{ fontWeight: "bold" }}>
                  Tools and Technologies:{" "}
                </span>
                {this.details.tools_and_technologies.join(", ")}
              </label>
              <div style={{ display: "flex", alignItems: "center", margin: "0 auto"}}>
                <CustomButton
                  link={this.details.source_code_link}
                  text="Source Code"
                  noOfButtons={
                    this.details.production_link.length !== 0 ? 2 : 1
                  }
                />
                {this.details.production_link.length !== 0 ? (
                  <CustomButton
                    link={this.details.production_link}
                    text="Production"
                    noOfButtons={2}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function closeProjects(exception) {
  const projects = document.getElementsByClassName("project");
  for (let i = 0; i < projects.length; i++) {
    const project = projects.item(i);
    const image_and_details = project.children;
    if (exception !== project.getAttribute("position")) {
      image_and_details.item(1).style.display = "none";
      image_and_details.item(1).classList.remove("show-bottom");
    }
  }
}

const PROJECTS = [
  {
    name: "Web Resume",
    languages_and_frameworks: ["HTML", "CSS", "JavaScript", "React"],
    tools_and_technologies: ["Visual Studio", "Git"],
    production_link: "http://developer.mozilla.org",
    source_code_link: "http://googlecode.com",
    description:
      "The tears of a clown make my lipstick run, but my shower cap is still intact.",
    image: "/assets/images/test.jpg",
  },
  {
    name: "Web Resume",
    languages_and_frameworks: ["HTML", "CSS", "JavaScript", "React"],
    tools_and_technologies: ["Visual Studio", "Git"],
    production_link: "http://developer.mozilla.org",
    source_code_link: "http://googlecode.com",
    description:
      "The tears of a clown make my lipstick run, but my shower cap is still intact.",
    image: "/assets/images/aboutme.jpg",
  },
  {
    name: "Web Resume",
    languages_and_frameworks: ["HTML", "CSS", "JavaScript", "React"],
    tools_and_technologies: ["Visual Studio", "Git"],
    production_link: "",
    source_code_link: "http://googlecode.com",
    description:
      "The tears of a clown make my lipstick run, but my shower cap is still intact.",
    image: "/assets/images/aboutme.jpg",
  },
];

function Projects(props) {
  return (
    <div
      id="projects"
      className="page"
      onMouseLeave={() => closeProjects("-1")}
    >
      {PROJECTS.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            position={index.toString()}
            details={project}
          />
        );
      })}
    </div>
  );
}

export default Projects;
