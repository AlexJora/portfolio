import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const SubmitButton = styled(Button)`
  &&&.btn {
    color: #fff;
    background-color: var(--button-orange);
    border-color: var(--button-green);

    padding: 10px 15px;

    &:hover {
      background-color: var(--button-green);
      border-color: var(--button-orange);
    }
  }
`;
const CustomInput = styled.input`
  background-color: transparent;
  border-top: none;
  border-right: none;
  border-left: 3px solid gray;
  border-bottom: 3px solid gray;
  border-radius: 5px;
  width: 60%;
`;

const ContactForm = () => {
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
    <Form onSubmit={handleSubmit(onSubmit)}>
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
          rows={2}
          placeholder="Message"
          className={`p-2 ${errors.message ? "is-invalid" : ""}`}
          {...register("message", { required: "Please enter your message" })}
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
