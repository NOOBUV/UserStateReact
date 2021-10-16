import "./App.css";
import TabsComp from "./components/TabsComp";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState([]);

  // fetching the data
  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers();
      setUser(usersFromServer);
    };
    getUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch("https://userstatemanagement.herokuapp.com/users/");
    const data = await res.json();
    return data;
  };

  // id to state conversion objects

  const stateId = {
    1: "Andhra Pradesh",
    2: "Arunachal Pradesh",
    3: "Assam",
    4: "Bihar",
    5: "Chattisgarh",
    6: "Goa",
    7: "Gujrat",
    8: "Haryana",
    9: "Himachal Pradesh",
    10: "Jharkhand",
    11: "Karnataka",
    12: "Kerala",
    13: "Madhya Pradesh",
    14: "Maharashtra",
    15: "Manipur",
    16: "Meghalaya",
    17: "Mizoram",
    18: "Nagaland",
    19: "Orissa",
    20: "Punjab",
    21: "Rajasthan",
    22: "Sikkim",
    23: "Tamil Nadu",
    24: "Telengana",
    25: "Tripura",
    26: "Uttar Pradesh",
    27: "Uttarakhand",
    28: "West Bengal",
  };

  const idState = {
    Andhra_Pradesh: 1,
    Arunachal_Pradesh: 2,
    Assam: 3,
    Bihar: 4,
    Chattisgarh: 5,
    Goa: 6,
    Gujrat: 7,
    Haryana: 8,
    Himachal_Pradesh: 9,
    Jharkhand: 10,
    Karnataka: 11,
    Kerala: 12,
    Madhya_Pradesh: 13,
    Maharashtra: 14,
    Manipur: 15,
    Meghalaya: 16,
    Mizoram: 17,
    Nagaland: 18,
    Orissa: 19,
    Punjab: 20,
    Rajasthan: 21,
    Sikkim: 22,
    Tamil_Nadu: 23,
    Telengana: 24,
    Tripura: 25,
    Uttar_Pradesh: 26,
    Uttarakhand: 27,
    West_Bengal: 28,
  };

  // arrays for barchart

  const stateArr = [];
  const allState = Array.from(Object.values(stateId));

  const state = () => {
    user.map((userdata) => stateArr.push(stateId[userdata.state_name]));
  };
  state();

  // addTask functionality for for add user form

  const addTask = async (userdata) => {
    let payload = {
      name: userdata[0],
      registration_num: userdata[1],
      state_name: userdata[2],
    };
    const res = await fetch(
      "https://userstatemanagement.herokuapp.com/users/",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await res.json();

    setUser([...user, data]);
  };

  return (
    <div className="App">
      <TabsComp
        onAdd={addTask}
        user={user}
        stateId={stateId}
        idState={idState}
        stateArr={stateArr}
        allState={allState}
      />
    </div>
  );
}

export default App;
