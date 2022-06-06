import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Cross as Hamburger } from "hamburger-react";
import { FiBell, FiMail } from "react-icons/fi";
import UserAvatar from "react-user-avatar";

export const NavbarNavigation = () => {
  const navigate = useNavigate();
  const [hamburgerActive, setHamburgerActive] = React.useState(false);
  const [username, setUsername] = React.useState("");

  React.useEffect(() => {}, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("user-role");
    localStorage.removeItem("auth-token");

    navigate("/auth/login");
  };

  return (
    <Navbar expand="lg" bg="light">
      <Container fluid>
        <Navbar.Toggle>
          <Hamburger toggled={hamburgerActive} toggle={setHamburgerActive} />
        </Navbar.Toggle>

        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link className="nav-link-icon d-none">
              <FiMail />
            </Nav.Link>

            <Nav.Link className="nav-link-icon d-none">
              <FiBell />
            </Nav.Link>

            <Nav.Link onClick={handleLogout}>
              {/* <UserAvatar size="30" name="AU" /> */}Log Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
