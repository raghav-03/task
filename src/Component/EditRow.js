import React from "react";

const EditRow = ({ editdata,cancel ,editchangedata}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="person"
          value={editdata.person}
          onChange={editchangedata}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="matchcount"
          value={editdata.matchcount}
          onChange={editchangedata}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="timetaken"
          value={editdata.timetaken}
          onChange={editchangedata}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="milestravel"
          value={editdata.milestravel}
          onChange={editchangedata}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="fuelused"
          value={editdata.fuelused}
          onChange={editchangedata}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="noofvehicles"
          value={editdata.noofvehicles}
          onChange={editchangedata}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={cancel}> Cancel</button>
      </td>
    </tr>
  );
};

export default EditRow;
