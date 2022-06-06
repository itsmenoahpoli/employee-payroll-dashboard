import React from "react";
import { Container, Card, Image, Form, Button } from "react-bootstrap";

import brandLogo from "assets/images/brand-logo.png";
import { AuthLayout } from "components/layouts";
import { UserService } from "lib/services";

const pageSEO = {
  title: "Log In",
};

export const LoginPage = () => {
  const _userService = new UserService();
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    //
  };

  return (
    <AuthLayout pageSEO={pageSEO}>
      <Container fluid className="form-container">
        <Card className="col-md-3 border-0 shadow-sm">
          <Card.Body>
            <Container fluid className="text-center my-3">
              <Image src={brandLogo} alt="brand-logo" className="col-5" fluid />
            </Container>
            <Form onSubmit={handleLogin} className="mb-4">
              <Form.Group className="form-group">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="yourname@domain.com"
                  onChange={(e) =>
                    setCredentials({ ...credentials, email: e.target.value })
                  }
                  required
                />
              </Form.Group>

              <Form.Group className="form-group mb-1">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="********"
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                  required
                />
              </Form.Group>

              <Container fluid>
                <a href="/">
                  <small>Forgot your password?</small>
                </a>
              </Container>

              <Button type="submit" variant="primary" className="w-100 mt-2">
                Log In
              </Button>
            </Form>

            <Container fluid className="text-center">
              <small>
                Don't have an account?{" "}
                <a href="/">Request an account to have access</a>
              </small>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </AuthLayout>
  );
};
