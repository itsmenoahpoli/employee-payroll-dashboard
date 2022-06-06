import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import { NavbarNavigation } from "components/layouts/navigations";
import { BreadcrumbComponent } from "components/general";
import moment from "moment";

export const DashboardContent = (props) => {
  const { children } = props;

  const CurrentDatetime = () => {
    return (
      <small className="datetime-label">
        Today is &mdash; UTC +8 {moment().format("MMMM DD, YYYY h:mm A")}
      </small>
    );
  };

  return (
    <Container fluid className="dashboard-layout-content">
      <NavbarNavigation />

      <Container fluid className="page-content">
        <Container fluid className="d-flex justify-content-between">
          <BreadcrumbComponent />

          <CurrentDatetime />
        </Container>

        {children}
      </Container>
    </Container>
  );
};

DashboardContent.propTypes = {
  // children: PropTypes.object.isRequired,
};
