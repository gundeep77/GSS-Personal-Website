import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { darkTheme, lightTheme } from "../../themes/themeModes";
import { AnimatePresence, motion } from "framer-motion";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  LogoIcon,
  Span,
  MobileIcon,
  NavItems,
  NavLink,
  MobileLink,
  MobileMenu,
  GitHubButton,
  MaterialUISwitch,
  MaterialUISwitchDiv,
  ButtonContainer,
} from "./NavbarStyles";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo
          to="/"
          onClick="reload"
          style={{
            textDecoration: "None",
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20",
            cursor: "pointer",
          }}
        >
          <LogoIcon size="3rem" /> <Span>GSS</Span>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            GitHub
          </GitHubButton>
        </ButtonContainer>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20"
            >
              <MobileMenu isOpen={isOpen}>
                <MobileLink
                  href="#skills"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Skills
                </MobileLink>
                <MobileLink
                  href="#experience"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Experience
                </MobileLink>
                <MobileLink
                  href="#projects"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Projects
                </MobileLink>
                <MobileLink
                  href="#education"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Education
                </MobileLink>
                <MobileLink
                  href="#contact"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Contact
                </MobileLink>
                <GitHubButton
                  style={{
                    padding: "10px 16px",
                    background: `${theme.primary}`,
                    color: "white",
                    width: "max-content",
                  }}
                  href={Bio.github}
                  target="_blank"
                >
                  GitHub
                </GitHubButton>
              </MobileMenu>
            </motion.div>
          )}
        </AnimatePresence>
        <MaterialUISwitchDiv>
          <MaterialUISwitch checked={isDarkMode} onChange={toggleTheme} />
        </MaterialUISwitchDiv>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
