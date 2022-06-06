import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import DataTable from "react-data-table-component";

export const DatatableBuilder = (props) => {
  const { columns, data, isLoading, isSelectable, isPaginated } = props;

  return (
    <Container fluid>
      <DataTable
        columns={columns}
        data={data}
        responsive
        persistTableHead
        highlightOnHover
        noDataComponent="No results found"
        progressPending={isLoading}
        selectableRows={isSelectable}
        pagination={isPaginated}
      />
    </Container>
  );
};

DatatableBuilder.defaultProps = {
  isLoading: false,
  isSelectable: true,
  isPaginated: true,
  columns: [],
  data: [],
};

DatatableBuilder.propTypes = {
  coluns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  isPaginated: PropTypes.bool,
};
