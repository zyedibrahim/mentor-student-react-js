import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "./global";

export function AddstudentMentor() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      st_name: "",
      email: "",
      phone: "",
      program: "",
    },
    onSubmit: (data) => {
      Updatestudentmentor(data);
    },
  });

  const Updatestudentmentor = async (updatedata) => {
    await fetch(`${API}/students`, {
      method: "POST",
      body: JSON.stringify([updatedata]),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 card mt-5">
            <div className="card-header border-0 text-center">Add Student</div>
            <div className="card-body">
              <div className="mb-2">
                <label className="form-label">Student Name</label>
                <input
                  type="text"
                  className=" form-control"
                  name="st_name"
                  onChange={handleChange}
                  value={values.name}
                  placeholder="name"
                />{" "}
              </div>
              <div className="mb-2">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="email"
                  className=" form-control"
                />{" "}
              </div>
              <div className="mb-2">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  value={values.phone}
                  placeholder="phone"
                  className=" form-control"
                />{" "}
              </div>
              <div className="mb-2">
                <label className="form-label">Program</label>
                <input
                  type="text"
                  name="program"
                  onChange={handleChange}
                  value={values.program}
                  placeholder="program"
                  className=" form-control"
                />{" "}
              </div>
              <div className="d-grid">
                <button className="btn btn-success" type="submit">
                  Add Student
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
