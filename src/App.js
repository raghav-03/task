import { Fragment, useState } from "react";
import Row from "./Component/Row";
import EditRow from "./Component/EditRow";
import { nanoid } from "nanoid";
import { CSVLink } from "react-csv";

const data = [];

function App() {
  const [myData, setMyData] = useState(data);
  const [editid, seteditid] = useState(null);

  const [formdata, setformdata] = useState({
    person: "",
    matchcount: "",
    timetaken: "",
    milestravel: "",
    fuelused: "",
    noofvehicles: "",
  });
  const [editformdata, seteditformdata] = useState({
    person: "",
    matchcount: "",
    timetaken: "",
    milestravel: "",
    fuelused: "",
    noofvehicles: "",
  });
  const changedata = (e) => {
    const fieldname = e.target.name;
    const value = e.target.value;
    const newformdata = {
      ...formdata,
    };
    newformdata[fieldname] = value;
    setformdata(newformdata);
  };

  const adddata = (e) => {
    e.preventDefault();
    formdata.id = nanoid();
    const newdata = [...myData, formdata];
    setMyData(newdata);
    setformdata({
      person: "",
      matchcount: "",
      timetaken: "",
      milestravel: "",
      fuelused: "",
      noofvehicles: "",
    });
  };
  const savedit =(e)=>{
    e.preventDefault();
    const tempformdata={...editformdata};
    const tempdata = [...myData];
    const index = tempdata.findIndex((data) => data.id === editid);
    tempdata[index] = tempformdata;
    setMyData(tempdata);
    seteditid(null);
  }
  const deletedata = (dataid) => {
    const newdata = [...myData];
    const index = newdata.findIndex((data) => data.id === dataid);
    newdata.splice(index, 1);
    setMyData(newdata);
  };

  const editclick = (event, rowData) => {
    event.preventDefault();
    seteditid(rowData.id);
    const newdata=rowData;
    seteditformdata(newdata);
  };

  const cancel =()=>{
    seteditid(null);
  }
  const editchangedata=(e)=>{
    e.preventDefault();
    const fieldname = e.target.name;
    const value = e.target.value;
    const tempformdata={...editformdata};
    tempformdata[fieldname]=value;
    seteditformdata(tempformdata);
  }

  return (
    <div className="App">
      <form onSubmit={savedit}>
        <table>
          <thead>
            <tr>
              <th>Person Location</th>
              <th>Match count </th>
              <th>Time Taken</th>
              <th>Miles Travel</th>
              <th>Fuel Used</th>
              <th>No of Vehicle</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myData.map((rowData) => (
              <Fragment>
                {editid === rowData.id ? (
                  <EditRow editdata={editformdata} cancel={cancel} editchangedata={editchangedata}/>
                ) : (
                  <Row
                    rowdata={rowData}
                    deletedata={deletedata}
                    editclick={editclick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <form onSubmit={adddata}>
        <label>Person </label>
        <input
          type="text"
          name="person"
          value={formdata.person}
          onChange={changedata}
        ></input>
        <label>Match Count </label>
        <input
          type="text"
          name="matchcount"
          value={formdata.matchcount}
          onChange={changedata}
        ></input>
        <label>Time Taken </label>
        <input
          type="text"
          name="timetaken"
          value={formdata.timetaken}
          onChange={changedata}
        ></input>
        <label>Miles Travel </label>
        <input
          type="text"
          name="milestravel"
          value={formdata.milestravel}
          onChange={changedata}
        ></input>
        <label>Fuel Used </label>
        <input
          type="text"
          name="fuelused"
          value={formdata.fuelused}
          onChange={changedata}
        ></input>
        <label>No of Vehicles </label>
        <input
          type="text"
          name="noofvehicles"
          value={formdata.noofvehicles}
          onChange={changedata}
        ></input>
        <button type="submit">Add Data</button>
      </form>
      <CSVLink data={myData}>Download me</CSVLink>;

    </div>
  );
}

export default App;
