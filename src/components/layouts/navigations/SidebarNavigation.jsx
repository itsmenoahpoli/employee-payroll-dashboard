import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

export const SidebarNavigation = (props) => {
  const { sidebarLinks } = props;
  const navigate = useNavigate();

  const SidebarButtonLinks = (props) => {
    const { links } = props;

    const handleNavigate = (url) => {
      navigate(url);
    };

    return links.map((item) => (
      <>
        <Button key={item.url} onClick={() => handleNavigate(item.url)}>
          {item.icon} &nbsp; {item.label}
        </Button>
      </>
    ));
  };

  return (
    <Container fluid className="sidebar-container">
      <Container fluid className="sidebar-header">
        <h5>PSC Inc</h5>
      </Container>
      <Container fluid className="sidebar-links">
        <SidebarButtonLinks links={sidebarLinks} />
      </Container>
    </Container>
  );
};

SidebarNavigation.propTypes = {
  sidebarLinks: PropTypes.array.isRequired,
};
