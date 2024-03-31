import { CloseRounded } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";
import {
  Container,
  Title,
  Date,
  Wrapper,
  Image,
  Tags,
  Desc,
  ButtonGroup,
  Button,
  Tag,
} from "./ProjectDetailsStyles";

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <Image src={project?.image} />
          <Title>{project?.title}</Title>
          <Date>{project?.date}</Date>
          <Tags>
            {project?.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>
          <Desc>{project?.description}</Desc>
          <ButtonGroup>
            <Button dull href={project?.github} target="new">
              View Code
            </Button>
            {/* <Button dull href={project?.webapp} target='new'>View Live</Button> */}
            {project.title === "Ticket Stop" || project.title === "Tasklear - Manage your tasks!" ? (
              <Button dull href={project?.webapp} target="new">
                View Live
              </Button>
            ) : null}
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetails;
