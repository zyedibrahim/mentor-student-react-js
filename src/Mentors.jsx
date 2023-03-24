import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./global";

export function Mentors() {
  const [mentor, setmentor] = useState();

  useEffect(() => {
    fetch(`${API}/mentors`)
      .then((data) => data.json())
      .then((data) => setmentor(data));
  }, []);

  const [student, setstudent] = useState();

  useEffect(() => {
    fetch(`${API}/students`)
      .then((data) => data.json())
      .then((data) => setstudent(data));
  }, []);

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
function Mentorlist({ mentor, student, index }) {
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
    // <div className="mentor-list">
    //   <div>
    //     <h1> mentor </h1>
    //   </div>

    //   <h1>{mentor.mt_name}</h1>

    //   <h1>{mentor.email}</h1>

    //   <h1>{mentor.phone}</h1>

    //   <h1>{mentor.department}</h1>

    //   <div>
    //     <div>
    //       <button
    //         onClick={() => addstudent(add, mentor._id)}
    //         className="btn btn-primary"
    //       >
    //         add
    //       </button>
    //     </div>
    //     <div className="btn-group">
    // <button
    //   type="button"
    //   className="btn btn-primary"
    //   data-bs-toggle="dropdown"
    //   aria-expanded="false"
    // >
    //   select student
    // </button>

    // <span className="visually-hidden">Toggle Dropdown</span>

    // <ul className="dropdown-menu">
    //   {student?.map((ele) => {
    //     return (
    //       <li
    //         key={ele._id}
    //         onClick={() => {
    //           setaddstd([ele]);
    //           setadd(ele);
    //         }}
    //       >
    //         <a className="dropdown-item" href="#">
    //           {ele.st_name}
    //         </a>
    //       </li>
    //     );
    //   })}
    // </ul>

    //       <div>
    //         {addstd?.map((ele) => {
    //           return <div key={ele._id}> {ele.st_name}</div>;
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </div>

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
        </div>
      </td>
    </tr>
  );
}
// addstudent(addstd, mentor._id)
