import React from "react";
import { Table } from "react-bootstrap";
import TableRow from "../components/TableRow";

const TableComp = ({ user, stateId }) => {
  return (
    <Table
      striped
      bordered
      hover
      style={{ width: "90%", margin: "auto" }}
      className="bg-light"
    >
      <thead>
        <tr>
          {/* <th>Id</th> */}
          <th>Name</th>
          <th>Registration Number</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody style={{ overflow: "auto" }}>
        {user.map((userdata) => (
          <TableRow key={userdata.id} userdata={userdata} stateId={stateId} />
        ))}
      </tbody>
    </Table>
  );
};

export default TableComp;
