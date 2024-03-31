import React from "react";
import ProfileBgAnimation from "../ProfileBgAnimation";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import {
  Img,
  ProfileBg,
  ProfileContainer,
  ProfileInnerContainer,
  ProfileLeftContainer,
  ProfileRightContainer,
  ResumeButton,
  Span,
  SubTitle,
  TextLoop,
  Title,
} from "./ProfileSectionStyles";

const ProfileSection = () => {
  return (
    <div id="about">
      <ProfileContainer>
        <ProfileBg>
          <ProfileBgAnimation />
        </ProfileBg>
        <ProfileInnerContainer>
          <ProfileLeftContainer id="Left">
            <Title>
              Hi, I am <br /> {Bio.name} <span className="wave">👋</span>
            </Title>
            <TextLoop>
              I'm a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="display">
              Resume
            </ResumeButton>
          </ProfileLeftContainer>

          <ProfileRightContainer id="Right">
            <Img src={"/images/me_stevens.jpeg"} alt="Gundeep Singh Saluja" />
          </ProfileRightContainer>
        </ProfileInnerContainer>
      </ProfileContainer>
    </div>
  );
};

export default ProfileSection;
