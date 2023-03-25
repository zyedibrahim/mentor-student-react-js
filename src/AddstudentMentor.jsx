import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "./global";
// this

import * as yup from "yup";

const formvalidationschema = yup.object({
  st_name: yup.string().required("This is fiels is required"),
  phone: yup
    .string()
    .required("This field is required")
    .min(8, "Passwords must be at least 8 characters"),
  email: yup.string().email("email field required").required(),
  program: yup.string().required(),
});

export function AddstudentMentor() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { values, handleChange, handleSubmit, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        st_name: "",
        email: "",
        phone: "",
        program: "",
      },
      validationSchema: formvalidationschema,
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
                  onBlur={handleBlur}
                  name="st_name"
                  onChange={handleChange}
                  value={values.name}
                  placeholder="name"
                />{" "}
                {touched.st_name && errors.st_name ? errors.st_name : ""}
              </div>
              <div className="mb-2">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  onBlur={handleBlur}
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="email"
                  className=" form-control"
                />{" "}
                {touched.email && errors.email ? errors.email : ""}
              </div>
              <div className="mb-2">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  onBlur={handleBlur}
                  name="phone"
                  onChange={handleChange}
                  value={values.phone}
                  placeholder="phone"
                  className=" form-control"
                />{" "}
                {touched.phone && errors.phone ? errors.phone : ""}
              </div>
              <div className="mb-2">
                <label className="form-label">Program</label>
                <input
                  type="text"
                  onBlur={handleBlur}
                  name="program"
                  onChange={handleChange}
                  value={values.program}
                  placeholder="program"
                  className=" form-control"
                />{" "}
                {touched.program && errors.program ? errors.program : ""}
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
