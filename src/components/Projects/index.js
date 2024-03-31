import React from "react";
import ProjectCard from "../Cards/ProjectCard";
import { projects } from "../../data/constants";
import { useState } from "react";
import {
  CardContainer,
  Container,
  Divider,
  Title,
  ToggleButton,
  ToggleButtonGroup,
  Wrapper,
} from "./ProjectsStyles";

const Projects = ({ setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "javascript" ? (
            <ToggleButton
              active
              value="javascript"
              onClick={() => setToggle("javascript")}
            >
              JavaScript
            </ToggleButton>
          ) : (
            <ToggleButton
              value="javascript"
              onClick={() => setToggle("javascript")}
            >
              JavaScript
            </ToggleButton>
          )}
          <Divider />
          {toggle === "python" ? (
            <ToggleButton
              active
              value="python"
              onClick={() => setToggle("python")}
            >
              Python
            </ToggleButton>
          ) : (
            <ToggleButton value="python" onClick={() => setToggle("python")}>
              Python
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => toggle === item.category)
            .map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
