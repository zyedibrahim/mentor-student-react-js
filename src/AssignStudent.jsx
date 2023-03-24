// function AddFields() {
//   const [fields, setFields] = useState([{ value: '' }]);
//   function handleAddField() {
//     const values = [...fields];
//     values.push({ value: '' });
//     setFields(values);
//   }
//   function handleChange(index, event) {
//     const values = [...fields];
//     values[index].value = event.target.value;
//     setFields(values);
//   }
//   return (
//     <div>
//       {fields.map((field, index) => (
//         <div key={index}>
//           <input
//             type="text"
//             value={field.value}
//             onChange={(event) => handleChange(index, event)}
//           />
//         </div>
//       ))}
//       <button onClick={handleAddField}>Add</button>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import { API } from "./global";

export function AssignStudent() {
  const [getdata, setgetdata] = useState();

  const getfun = () => {
    fetch(`${API}/mentors`)
      .then((data) => data.json())
      .then((data) => setgetdata(data));
  };

  useEffect(() => {
    getfun();
  }, []);

  async function dele(dataid, data) {
    await fetch(`${API}/removementors/${dataid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((data) => console.log(data));
    getfun();
  }

  return (
    <div className="container">
      <table className="table mt-5 table-striped table-hover table-success ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th className="text-center" scope="col">
              Assign Details
            </th>
          </tr>
        </thead>
        <tbody>
          {getdata?.map((ele, index) => {
            return (
              <tr key={ele._id}>
                <th scope="row">{index + 1}</th>
                <td>
                  <h1>Mentor : {ele.mt_name}</h1>
                  {ele.student?.map((eledata, index) => {
                    return (
                      <div key={index}>
                        <h4>Student : {eledata.st_name} </h4>
                        <button
                          onClick={() => {
                            dele(ele._id, eledata);
                          }}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </div>
                    );
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* {getdata?.map((ele) => {
        return (
          <td key={ele._id}>
            <h4>THIS STUDENT ASSIGN THIS MENTOR</h4>
            <h1>mentor : {ele.mt_name}</h1>
            {ele.student?.map((eledata) => {
              return <td key={eledata._id}>student : {eledata.st_name} </td>;
            })}
          </td>
        );
      })} */}
    </div>
  );
}
// {getdata?.map((ele, index) => {
//   return (
//     <tr key={ele._id}>
//       <th scope="row">{index + 1}</th>
//       <td>
//         <h1>Mentor : {ele.mt_name}</h1>
//         {ele.student?.map((eledata, index) => {
//           return (
//             <div key={index}>
//               {eledata?.map((d) => {
//                 return (
//                   <div key={d._id}>
//                     <h4>Student : {d.st_name} </h4>
//                     <button
//                       onClick={() => {
//                         dele(ele._id, d);
//                         console.log(d, ele._id);
//                       }}
//                       className="btn btn-danger"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>
//           );
//         })}
