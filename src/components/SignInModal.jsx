import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SignInModal({ show, onClose, onLoginSuccess }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (show) {
      setFormData({ email: "", password: "" });
      setErrors({});
      setSuccess("");
    }
  }, [show]);

  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const matchedUser = users.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );

      if (matchedUser) {
        localStorage.setItem("authenticated", "true");
        localStorage.setItem("currentUser", JSON.stringify(matchedUser));

        setSuccess("Sign In Successful!");
        setErrors({});

        setTimeout(() => {
          onLoginSuccess?.();
          navigate("/dashboard");
        }, 1000);
      } else {
        setErrors({ auth: "Invalid email or password" });
        setSuccess("");
      }
    } else {
      setErrors(validationErrors);
      setSuccess("");
    }
  };

  return (
    <Modal show={show} onHide={onClose} aria-labelledby="signin-modal">
      <Modal.Header closeButton>
        <Modal.Title id="signin-modal">Sign In</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          {success && <Alert variant="success">{success}</Alert>}
          {errors.auth && <Alert variant="danger">{errors.auth}</Alert>}
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default SignInModal;
