import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./global";

export function Mentors() {
  const [mentor, setmentor] = useState();
  const [student, setstudent] = useState();

  const mentorget = () => {
    fetch(`${API}/mentors`)
      .then((data) => data.json())
      .then((data) => setmentor(data));
  };

  useEffect(() => mentorget(), []);

  const studentget = () => {
    fetch(`${API}/students`)
      .then((data) => data.json())
      .then((data) => setstudent(data));
  };

  useEffect(() => studentget(), []);

  async function deletstd(stdid) {
    await fetch(`${API}/mentors/${stdid}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((data) => console.log(data));
    mentorget();
    studentget();
  }

  return (
    <div className="container">
      <table className="table mt-5 table-success table-striped table-hover ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th className="text-center" scope="col">
              <h3>Mentor</h3>
            </th>
            <th className="text" scope="col">
              <h3>Select</h3>
            </th>
            <th className="text" scope="col">
              <h3>Add</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {mentor?.map((data, index) => (
            <Mentorlist
              deletstd={deletstd}
              key={data._id}
              index={index}
              mentor={data}
              student={student}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
function Mentorlist({ mentor, student, index, deletstd }) {
  const navigate = useNavigate();
  const [addstd, setaddstd] = useState([]);

  async function addstudent(data, idm) {
    await fetch(`${API}/mentors/${idm}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => console.log(data));

    console.log(data, idm);
  }

  return (
    <tr key={mentor._id}>
      <th scope="row">{index + 1}</th>
      <td>
        <h3> MentorName :{mentor.mt_name}</h3>
        <h4>Phone :{mentor.phone}</h4>
        <h4>Email :{mentor.email}</h4>
        <h4>Program :{mentor.department}</h4>
      </td>
      <td>
        <div className="d-grid">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            select student
          </button>

          <span className="visually-hidden">Toggle Dropdown</span>

          <ul className="dropdown-menu">
            {student?.map((ele) => {
              return (
                <li
                  key={ele._id}
                  onClick={() => {
                    setaddstd([...addstd, ele]);
                  }}
                >
                  <a className="dropdown-item" href="#">
                    {ele.st_name}
                  </a>
                </li>
              );
            })}
          </ul>
          <div>
            {addstd?.map((ele) => {
              return (
                <div key={ele._id}>
                  <ul>
                    <li>{ele.st_name}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </td>
      <td>
        <div className="d-grid ">
          <button
            onClick={() => {
              addstudent(addstd, mentor._id);
              // (window.location.href = "mentors");
            }}
            className="btn btn-primary"
          >
            Add
          </button>
          <div className="d-grid">
            <button
              onClick={() => deletstd(mentor._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}
// addstudent(addstd, mentor._id)
