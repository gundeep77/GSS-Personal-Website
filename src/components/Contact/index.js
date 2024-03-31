import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import {
  ContactButton,
  ContactForm,
  ContactInput,
  ContactInputMessage,
  Container,
  Desc,
  Title,
  Wrapper,
} from "./ContactStyles";

const Contact = ({ isDarkMode }) => {
  const form = useRef();
  const [captchaValue, setCaptchaValue] = useState(null);
  const [alertState, setAlertState] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [subjectError, setSubjectError] = useState(null);
  const [messageError, setMessageError] = useState(null);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [subjectValue, setSubjectValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [sent, setSent] = useState(false);
  const { vertical, horizontal, open } = alertState;
  const [buttonValue, setButtonValue] = useState("Send");
  const contactButtonRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      nameValue &&
      emailValue &&
      subjectValue &&
      messageValue &&
      !nameError &&
      !emailError &&
      !subjectError &&
      !messageError &&
      captchaValue !== null
    ) {
      setButtonValue("Sending...");
      contactButtonRef.current.disabled = true;
      emailjs
        .sendForm(
          "service_yczbav4",
          "template_ruosj6m",
          form.current,
          "eO0rtcfzOMkmoCuux"
        )
        .then(() => {
          form.current.reset();
          window.grecaptcha.reset();
          setCaptchaValue(null);
          setNameValue("");
          setEmailValue("");
          setSubjectValue("");
          setMessageValue("");
          setAlertState({ ...alertState, open: true });
          setSent(true);
          setButtonValue("Send");
        })
        .catch((error) => {
          console.log(error.text);
        });
    } else {
      contactButtonRef.current.disabled = false;
      !nameValue && setNameError(true);
      !emailValue && setEmailError(true);
      !subjectValue && setSubjectError(true);
      !messageValue && setMessageError(true);
      setAlertState({ ...alertState, open: true });
      setSent(false);
    }
    contactButtonRef.current.disabled = false;
  };

  const handleName = (event) => {
    if (!event.target.value.trim().length) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setNameValue(event.target.value.trim());
  };
  const handleSubject = (event) => {
    if (!event.target.value.trim().length) {
      setSubjectError(true);
    } else {
      setSubjectError(false);
    }
    setSubjectValue(event.target.value.trim());
  };
  const handleMessage = (event) => {
    if (!event.target.value.trim().length) {
      setMessageError(true);
    } else {
      setMessageError(false);
    }
    setMessageValue(event.target.value.trim());
  };
  const handleEmail = (event) => {
    if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
        event.target.value
      )
    ) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setEmailValue(event.target.value.trim());
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact Me</Title>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <Desc>
            Feel free to reach out to me for any questions, opportunities, or
            collaborations!
          </Desc>
          <ContactInput
            style={{ border: nameError ? "2px solid red" : "" }}
            id="name"
            placeholder="Your Name"
            name="from_name"
            onChange={handleName}
          />
          <ContactInput
            style={{ border: emailError ? "2px solid red" : "" }}
            placeholder="Your Email"
            name="from_email"
            onChange={handleEmail}
          />
          <ContactInput
            style={{ border: subjectError ? "2px solid red" : "" }}
            placeholder="Subject"
            name="subject"
            onChange={handleSubject}
          />
          <ContactInputMessage
            style={{ border: messageError ? "2px solid red" : "" }}
            placeholder="Message"
            rows="4"
            name="message"
            onChange={handleMessage}
          />
          <ReCAPTCHA
            sitekey="6Lc-0HcpAAAAAME7y5Lb_87NqU-il08wKLqltHSh"
            onChange={(value) => {
              setCaptchaValue(value);
            }}
            theme={isDarkMode ? "dark" : "light"}
          />
          <ContactButton ref = {contactButtonRef} type="submit" value={buttonValue}/>
        </ContactForm>
        <Snackbar
          ContentProps={{
            sx: {
              background: sent ? "#5cb85c" : "#dc4c64",
              color: "black",
              justifyContent: "center",
            },
          }}
          style={{ marginTop: "70px" }}
          autoHideDuration={4000}
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={() => {
            setAlertState({ ...alertState, open: false });
          }}
          message={
            sent
              ? "Message sent successfully!"
              : "Please fill the form with the CAPTCHA!"
          }
          key={vertical + horizontal}
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
