import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "./global";

export function AddMentorstudent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      mt_name: "",
      email: "",
      phone: "",
      department: "",
    },
    onSubmit: (data) => {
      Updatestudentmentor(data);
    },
  });

  const Updatestudentmentor = async (updatedata) => {
    await fetch(`${API}/mentors`, {
      method: "POST",
      body: JSON.stringify([updatedata]),
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/mentors");
  };

  return (
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       name="mt_name"
    //       onChange={handleChange}
    //       value={values.name}
    //       placeholder="name"
    //     />{" "}
    //     <br />
    //     <input
    //       type="text"
    //       name="email"
    //       onChange={handleChange}
    //       value={values.email}
    //       placeholder="email"
    //     />{" "}
    //     <br />
    //     <input
    //       type="text"
    //       name="phone"
    //       onChange={handleChange}
    //       value={values.phone}
    //       placeholder="phone"
    //     />{" "}
    //     <br />
    //     <input
    //       type="text"
    //       name="department"
    //       onChange={handleChange}
    //       value={values.department}
    //       placeholder="department"
    //     />{" "}
    //     <br />
    //     <button type="submit">submit</button>
    //   </form>
    // </div>
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 card mt-5">
            <div className="card-header border-0 text-center">Add Mentor</div>
            <div className="card-body">
              <div className="mb-2">
                <label className="form-label">Student Name</label>
                <input
                  type="text"
                  className=" form-control"
                  name="mt_name"
                  onChange={handleChange}
                  value={values.mt_name}
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
                <label className="form-label">Department</label>
                <input
                  type="text"
                  name="department"
                  onChange={handleChange}
                  value={values.department}
                  placeholder="Department"
                  className=" form-control"
                />{" "}
              </div>
              <div className="d-grid">
                <button className="btn btn-success" type="submit">
                  Add Mentor
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
