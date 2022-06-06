import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";

export const AuthLayout = (props) => {
  const { children, pageSEO } = props;

  return (
    <>
      <Helmet>
        <title>{pageSEO.title}</title>
      </Helmet>

      <Container fluid className="auth-layout-container">
        <Container fluid className="auth-layout-content">
          {children}
        </Container>
      </Container>
    </>
  );
};

AuthLayout.propTypes = {
  pageSEO: PropTypes.object.isRequired,
};
