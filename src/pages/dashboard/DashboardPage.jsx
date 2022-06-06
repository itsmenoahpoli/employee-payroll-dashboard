import React from "react";
import { Container } from "react-bootstrap";

import { DashboardLayout } from "components/layouts";

const pageSEO = {
  title: "Dashboard",
};

export const DashboardPage = () => {
  return (
    <DashboardLayout pageSEO={pageSEO}>
      <Container fluid>Dashboard Page</Container>
    </DashboardLayout>
  );
};
