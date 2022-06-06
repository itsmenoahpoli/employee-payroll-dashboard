import React from "react";
import { Container } from "react-bootstrap";

import { DashboardLayout } from "components/layouts";

const pageSEO = {
  title: "Dashboard",
};

export const DashboardPage = () => {
  const getUserRole = () => {
    let userRole = localStorage.getItem("user-role");

    return userRole ? userRole.toUpperCase() : null;
  };

  return (
    <DashboardLayout pageSEO={pageSEO}>
      <Container fluid>Logged-in as {getUserRole()}</Container>
    </DashboardLayout>
  );
};
