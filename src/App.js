// import Data from "./data.json"
import DataTable from 'react-data-table-component';
import {  useState } from "react";

const columns = [
  {
      name: 'SNo',
      selector: row => row.sno,
  },
  {
      name: 'Name',
      selector: row => row.name,
  },
  {
      name: 'DOB',
      selector: row => row.dob,
  },
  {
      name: 'Age',
      selector: row => row.age,
  },
  {
      name: 'Occupation',
      selector: row => row.occupation,
  },
  {
      name: 'Contact No',
      selector: row => row.contactno,
  },
];
const data = [
  {
          name: 'Beetlejuice',
          dob: '1988',
      },
]


function App() {
  const [formdata, setformdata] = useState({
    name:"",
    dob:"",
    age:"",
    occupation:"",
    contactno:"",
  });
  const changedata=(e)=>{
    const fieldname=e.target.name;
    const value=e.target.value;
    const newformdata={
      ...formdata,
    }
    newformdata[fieldname]=value;
    setformdata(newformdata);
  }
  const adddata=(e)=>{
    e.preventDefault();
    formdata.id=1;
    data.push(formdata);
  }
  
  return (
    <div className="App">
       <DataTable
            columns={columns}
            data={data}
        />
        <form>
          <label>Name</label>
          <input type="text" name="name" value={formdata.name} onChange={changedata}></input>
          <label>Date of Birth</label>
          <input type="text" name="dob" value={formdata.dob} onChange={changedata}></input>
          <label>Age</label>
          <input type="text" name="age" value={formdata.age} onChange={changedata}></input>
          <label>Occupation</label>
          <input type="text" name="occupation" value={formdata.occupation} onChange={changedata}></input>
          <label>Contact No</label>
          <input type="text" name="contactno" value={formdata.contactno} onChange={changedata}></input>
          <button type="submit" onClick={adddata}>Add Data</button>
        </form>
    </div>
  );
}

export default App;

