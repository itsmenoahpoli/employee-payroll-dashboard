import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const RouterComponent = (props) => {
  const { routes } = props;

  const renderAppRoutes = (routes) => {
    return routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        element={route.component}
        exact
      />
    ));
  };

  return (
    <Router>
      <Routes>{renderAppRoutes(routes)}</Routes>
    </Router>
  );
};

RouterComponent.propTypes = {
  routes: PropTypes.array.isRequired,
};
