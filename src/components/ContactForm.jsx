import { useState, useContext } from "react";
import { ThemeContext } from "../Theme";
import { useForm } from "react-hook-form";
import { Form, Button, Col, Row } from "react-bootstrap";
import styled, { css } from "styled-components";
import emailjs from "@emailjs/browser";

const lightThemeStyles = css`
  color: black;
  background-color: transparent;
  border-top: none;
  border-right: none;
  border-left: 3px solid #000;
  border-bottom: 3px solid #000;
`;

const darkThemeStyles = css`
  color: white;
  background-color: transparent;
  border-top: none;
  border-right: none;
  border-left: 3px solid #fff;
  border-bottom: 3px solid #fff;
`;

const CustomInput = styled.input`
  ${(props) =>
    props.theme === "light-theme" ? lightThemeStyles : darkThemeStyles}
  border-radius: 5px;
  width: 60%;
  margin-bottom: 10px;

  &::placeholder {
    color: ${(props) => (props.theme === "light-theme" ? "black" : "white")};
`;

const SubmitButton = styled(Button)`
  &&&.btn {
    color: #000;
    background-color: var(--button-orange);
    border-color: var(--button-green);

    padding: 10px 15px;

    &:hover {
      background-color: var(--button-green);
      border-color: var(--button-orange);
    }
  }
`;

const ContactForm = () => {
  const { theme } = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destructure data object
    const { name, email, message } = data;
   
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        message,
      };
      

      const serviceId = import.meta.env.VITE_SERVICE_ID;
      const templateId = import.meta.env.VITE_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_PUBLIC_KEY;
      

      // Use emailjs to email contact form data
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Display success alert
      toggleAlert("Your message has been sent.", "success");
    } catch (e) {
      console.error(e);
      // Display error alert
      toggleAlert("Uh.Something went wrong.", "danger");
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} theme={theme}>
      <Form.Group controlId="formName" className="mb-3">
        <CustomInput
          type="text"
          placeholder="Name"
          className={`p-2 ${errors.name ? "is-invalid" : ""}`}
          {...register("name", {
            required: "Please enter your name",
            maxLength: {
              value: 30,
              message: "Please use 30 characters or less",
            },
          })}
          theme={theme}
        />
        {errors.name && (
          <div className="invalid-feedback">{errors.name.message}</div>
        )}
      </Form.Group>

      <Row className="mb-3">
        <Col>
          <Form.Group controlId="formEmail">
            <CustomInput
              type="email"
              placeholder="Email"
              className={`p-2 ${errors.email ? "is-invalid" : ""}`}
              {...register("email", {
                required: "Please enter your email",
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
              theme={theme}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="formMessage" className="mb-3">
        <CustomInput
          as="textarea"
          rows={3}
          placeholder="Your message"
          className={`p-2 ${errors.message ? "is-invalid" : ""}`}
          {...register("message", { required: "Please enter your message" })}
          theme={theme}
        />
        {errors.message && (
          <div className="invalid-feedback">{errors.message.message}</div>
        )}
      </Form.Group>

      <SubmitButton className="btn" type="submit" disabled={disabled}>
        GET IN TOUCH
      </SubmitButton>

      {alertInfo.display && (
        <div
          className={`alert alert-${alertInfo.type} alert-dismissible mt-3`}
          role="alert"
        >
          {alertInfo.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() =>
              setAlertInfo({ display: false, message: "", type: "" })
            }
          ></button>
        </div>
      )}
    </Form>
  );
};

export default ContactForm;
