import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Container, Spinner } from "react-bootstrap";

import { FiHome, FiUsers } from "react-icons/fi";

import { APP_CONSTANTS } from "lib/constants/app.constant";
import { SidebarNavigation } from "components/layouts/navigations";
import { DashboardContent } from "components/layouts/contents";

const sidebarLinks = [
  {
    label: "Dashboard",
    url: "/",
    icon: <FiHome />,
  },
  {
    label: "Users Management",
    url: "/users-management",
    icon: <FiUsers />,
  },
];

export const DashboardLayout = (props) => {
  const { children, pageSEO } = props;

  const [pageLoading, setPageLoading] = React.useState(true);

  const PageLoadingOverlay = () => {
    return (
      <Container fluid className="page-loading-overlay">
        <Spinner animation="border" />
      </Container>
    );
  };

  React.useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {APP_CONSTANTS.appName} &mdash; {pageSEO.title}
        </title>
      </Helmet>

      <Container fluid className="dashboard-layout-container">
        <SidebarNavigation sidebarLinks={sidebarLinks} />

        {Boolean(pageLoading) && <PageLoadingOverlay />}

        {Boolean(!pageLoading) && <DashboardContent children={children} />}
      </Container>
    </>
  );
};

DashboardLayout.propTypes = {
  pageSEO: PropTypes.object.isRequired,
};
