import React from "react";
import { skills } from "../../data/constants";
import {
  Container,
  Skill,
  SkillImage,
  SkillImageWithFilter,
  SkillItem,
  SkillList,
  SkillTitle,
  SkillsContainer,
  Title,
  Wrapper,
} from "./SkillsStyles";

const Skills = () => {
  const imagesForFilter = ["GitHub", "Flask", "NextJS"];
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill key={index}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, index) => (
                  <SkillItem key={index}>
                    {imagesForFilter.includes(item.name) ? (
                      <SkillImageWithFilter src={item.image} />
                    ) : (
                      <SkillImage src={item.image} />
                    )}
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
