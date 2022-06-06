import React from "react";
import { Container, Card, Image, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

import brandLogo from "assets/images/brand-logo.png";
import { AuthLayout } from "components/layouts";
import { AuthService } from "lib/services";

const pageSEO = {
  title: "Log In",
};

export const LoginPage = () => {
  const _authService = new AuthService();
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    await _authService
      .login(credentials)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("user-role", response.data.user.user_role.name);
        localStorage.setItem("auth-token", response.data.authToken);

        window.location = "/dashboard";
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          text: "Failed to authenticate, invalid credentials provided",
        });
      });
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
