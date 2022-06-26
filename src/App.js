import { Fragment, useState } from "react";
import Row from "./Component/Row";
import EditRow from "./Component/EditRow";
import { nanoid } from "nanoid";
import { CSVLink } from "react-csv";
import './App.css'
// Array of object to store the data
const data = [
  {
    id:"abhcwcgvharvjs",
    person: "ABC",
    matchcount: "3601/1000",
    timetaken: "1208.5",
    milestravel: "36",
    fuelused: "123",
    noofvehicles: "1",
  },
];

function App() {
  // state used to change the array of object
  const [myData, setMyData] = useState(data);
  // State used to set edit id
  const [editid, seteditid] = useState(null);

  // State used to store the changes made through form
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

  // Used to change the data fetched from editform
  const changedata = (e) => {
    const fieldname = e.target.name;
    const value = e.target.value;
    // fetch old data
    const newformdata = {...formdata};
    // update given field with value
    newformdata[fieldname] = value;
    // updating data
    setformdata(newformdata);
  };

  // function made to add new data to table
  const adddata = (e) => {
    e.preventDefault();
    // generating new id for each row
    formdata.id = nanoid();
    // making new array of old object and inserting new formdata into it
    const newdata = [...myData, formdata];
    // updating the data
    setMyData(newdata);
    // resetting the state
    setformdata({
      person: "",
      matchcount: "",
      timetaken: "",
      milestravel: "",
      fuelused: "",
      noofvehicles: "",
    });
  };

  // function used to save the edit made using editform
  const savedit =(e)=>{
    e.preventDefault();
    // fething edited data
    const tempformdata={...editformdata};
    // copying the data array
    const tempdata = [...myData];
    // finding the index of data whose needed to be changed by using editid(unique for every element)
    const index = tempdata.findIndex((data) => data.id === editid);
    // updating the value in array
    tempdata[index] = tempformdata;
    // updating the data  
    setMyData(tempdata);
    // reseting the edit id to null
    seteditid(null);
  }

  const deletedata = (dataid) => {
    // fething data
    const newdata = [...myData];
    // finding id and deleting the data from array using dataid(unique for every element) and updating the state
    const index = newdata.findIndex((data) => data.id === dataid);
    newdata.splice(index, 1);
    setMyData(newdata);
  };

  // This will be triggered when Edit is clicked on any row
  const editclick = (event, rowData) => {
    event.preventDefault();
    // set editid to row id 
    seteditid(rowData.id);
    // saving that particular row and setting edit form data to row data 
    const newdata=rowData;
    seteditformdata(newdata);
  };

  const cancel =()=>{
    // reset edit id to null on being clicked cancel
    seteditid(null);
  }

  const editchangedata=(e)=>{
    e.preventDefault();
    // fetch field whose need to be edited and value
    const fieldname = e.target.name;
    const value = e.target.value;
    // fetch old data and updating it to new data and storing it to state
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
            {/* Printing each row of data using table  */}
            {myData && myData.map((rowData) => (
              <Fragment>
                {/* if we have a edit click then call EditRow component */}
                {editid === rowData.id ? (
                  <EditRow key={rowData.id} editdata={editformdata} cancel={cancel} editchangedata={editchangedata}/>
                ) : (
                  // otherwise call Row component to simply print row data
                  <Row key={rowData.id} rowdata={rowData} deletedata={deletedata} editclick={editclick} />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      {/* form to capture new data */}
      <form onSubmit={adddata}>
        <input className="adddata"
          type="text"
          name="person"
          value={formdata.person}
          placeholder="Enter Person "
          onChange={changedata}
        ></input>
        <input className="adddata"
          type="text"
          name="matchcount"          
          placeholder="Enter Match Count "
          value={formdata.matchcount}
          onChange={changedata}
        ></input>
        <input className="adddata"
          type="text"
          placeholder="Enter Time Taken "
          name="timetaken"
          value={formdata.timetaken}
          onChange={changedata}
        ></input>
        <input className="adddata"
          type="text"
          name="milestravel"
          placeholder="Enter Miles Travel "
          value={formdata.milestravel}
          onChange={changedata}
        ></input>
        <input className="adddata"
          type="text"
          name="fuelused"
          placeholder="Enter Fuel Used "
          value={formdata.fuelused}
          onChange={changedata}
        ></input>
        <input className="adddata"
          type="text"
          name="noofvehicles"
          placeholder="Enter No of vehicles "
          value={formdata.noofvehicles}
          onChange={changedata}
        ></input>
        <button type="submit">Add Data</button>
      </form>
      {/* Link to generate CSV file */}
      <button id="csv">
        <CSVLink data={myData}>Export CSV file</CSVLink>
      </button>
    </div>
  );
}

export default App;
