import React from "react";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import AddUser from "../components/AddUser";
import TableComp from "../components/TableComp";
import BarChart from "../components/BarChart";

const TabsComp = ({ onAdd, user, stateId, idState, stateArr, allState }) => {
  return (
    <div>
      <Tabs
        defaultActiveKey="AddUser"
        id="uncontrolled-tab-example"
        className="mb-3 bg-light"
        // style={{ backgroundColor: "white"}}
      >
        <Tab eventKey="AddUser" title="Add User">
          <AddUser onAdd={onAdd} stateId={stateId} idState={idState} />
        </Tab>
        <Tab eventKey="Grid" title="Grid">
          <TableComp user={user} stateId={stateId} />
        </Tab>
        <Tab eventKey="Chart" title="Chart">
          <BarChart
            user={user}
            stateId={stateId}
            stateArr={stateArr}
            allState={allState}
          />
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabsComp;
