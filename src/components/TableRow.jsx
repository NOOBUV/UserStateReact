import React from "react";

const TableRow = ({ userdata, stateId }) => {
  const state = userdata.state_name;
  return (
    <tr>
      {/* <td>{userdata.id}</td> */}
      <td>{userdata.name}</td>
      <td>{userdata.registration_num}</td>
      <td>{stateId[state]}</td>
    </tr>
  );
};

export default TableRow;
