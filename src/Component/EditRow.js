import React from "react";
const EditRow = ({ editdata,cancel ,editchangedata}) => {
  return (
    // form to get the edited value
    <tr>
      <td>
        <input
          type="text"
          name="person"
          placeholder="Enter Person "
          value={editdata.person}
          onChange={editchangedata}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="matchcount"
          placeholder="Enter Match Count "
          value={editdata.matchcount}
          onChange={editchangedata}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="timetaken"
          placeholder="Enter Time Taken "
          value={editdata.timetaken}
          onChange={editchangedata}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="milestravel"
          placeholder="Enter Miles Travel "
          value={editdata.milestravel}
          onChange={editchangedata}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="fuelused"
          placeholder="Enter Fuel Used "
          value={editdata.fuelused}
          onChange={editchangedata}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="noofvehicles"
          placeholder="Enter No of vehicles "
          value={editdata.noofvehicles}
          onChange={editchangedata}
        ></input>
      </td>
      <td>
        {/* to update the edit in data */}
        <button type="submit">Save</button>
        {/* to cancel the edit */}
        <button type="button" onClick={cancel}> Cancel</button>
      </td>
    </tr>
  );
};

export default EditRow;
