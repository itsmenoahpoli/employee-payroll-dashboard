import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Cross as Hamburger } from "hamburger-react";
import { FiBell, FiMail } from "react-icons/fi";
import UserAvatar from "react-user-avatar";

export const NavbarNavigation = () => {
  const [hamburgerActive, setHamburgerActive] = React.useState(false);
  const [username, setUsername] = React.useState("");

  React.useEffect(() => {}, []);

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

            <Nav.Link>
              <UserAvatar size="30" name="AU" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
