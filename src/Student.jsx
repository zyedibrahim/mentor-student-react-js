import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./global";

export function Student() {
  const [student, setstudent] = useState();
  // hi
  const getstd = () => {
    fetch(`${API}/students`)
      .then((data) => data.json())
      .then((data) => setstudent(data));
  };

  useEffect(() => getstd(), []);

  async function deletstd(stdid) {
    await fetch(`${API}/students/${stdid}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((data) => console.log(data));

    getstd();
  }

  return (
    <div className="container">
      <table className="table mt-5 table-success table-striped table-hover ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th className="text-center" scope="col">
              <h3>Student</h3>
            </th>
            <th className="text-center" scope="col">
              <h3>Action</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {student?.map((data, index) => (
            <Studentlist
              deletstd={deletstd}
              key={data._id}
              index={index}
              student={data}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
function Studentlist({ student, index, deletstd }) {
  return (
    <tr key={student._id}>
      <th scope="row">{index + 1}</th>
      <td>
        <h3> StudentName :{student.st_name}</h3>
        <h4>Phone :{student.phone}</h4>
        <h4>Email :{student.email}</h4>
        <h4>Program :{student.program}</h4>
      </td>
      <td>
        <button
          onClick={() => deletstd(student._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
