import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb } from "react-bootstrap";
import { FiHome } from "react-icons/fi";

export const BreadcrumbComponent = (props) => {
  const renderBreadcrumbLinks = () => {
    const { pathname } = window.location;

    const paths = pathname.split(",").splice(0, 1);

    if (paths.length === 0) {
      return (
        <Breadcrumb.Item>
          <FiHome /> <span className="label">Home</span>
        </Breadcrumb.Item>
      );
    }

    return (
      <>
        <Breadcrumb.Item>
          <FiHome /> Home
        </Breadcrumb.Item>

        {paths.splice(0, 1).map((path, idx) => (
          <Breadcrumb.Item key={`${path}${idx}`}>
            {path.replaceAll("/", "")}
          </Breadcrumb.Item>
        ))}
      </>
    );
  };

  return <Breadcrumb>{renderBreadcrumbLinks()}</Breadcrumb>;
};

BreadcrumbComponent.propTypes = {
  links: PropTypes.array,
};
