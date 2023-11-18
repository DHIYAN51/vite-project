import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import "../styles/Login.css"

const Login = () => {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
    };
  
    return (
      <Container>
        <h1>Login Form</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="guvi@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Guvi"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">Login</Button>
          <p>New User  <Link to="/">Register</Link></p>
        </Form>
      </Container>
    );
  };
  

export default Login