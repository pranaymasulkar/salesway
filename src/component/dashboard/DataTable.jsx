import React from "react";
import { Table } from "react-bootstrap";
import DataTableTr from "./DataTableTr";
const DataTable = () => {
  return (
    <>
      <Table hover>
        <thead>
          <tr className="fs-14 fw-500 text-capitalize">
            <th>product</th>
            <th>solde ammount</th>
            <th>unit price</th>
            <th>revenue</th>
            <th>rating</th>
          </tr>
        </thead>
        <tbody>
          <DataTableTr />
        </tbody>
      </Table>
    </>
  );
};

export default DataTable;
