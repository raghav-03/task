import React from "react";

const Row = ({rowdata,deletedata,editclick}) => {
  return (
      <tr>
        <td>{rowdata.person}</td>
        <td>{rowdata.matchcount}</td>
        <td>{rowdata.timetaken}</td>
        <td>{rowdata.milestravel}</td>
        <td>{rowdata.fuelused}</td>
        <td>{rowdata.noofvehicles}</td>
        <td>
        <button type="button" onClick={(event) => editclick(event, rowdata)}>
          Edit
        </button>
        <button type="button" onClick={() => deletedata(rowdata.id)}>
          Delete
        </button>
      </td>
      </tr>
  );
};

export default Row;
