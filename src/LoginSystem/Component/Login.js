import React from "react";
import { Form,Button } from "react-bootstrap";

function Login() {





  return (
    <>
    <div style={{padding:"5%"}}>
    <h1>Login</h1>
    <div style={{padding: "7% 15%",border:"2px solid black"}}>
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    </div>
    
      
    </>
  );
}

export default Login
