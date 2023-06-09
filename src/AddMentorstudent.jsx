import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "./global";

import * as yup from "yup";

const formvalidationschema = yup.object({
  mt_name: yup.string().required("This is fiels is required"),
  phone: yup
    .string()
    .required("This field is required")
    .min(8, "Passwords must be at least 8 characters"),
  email: yup.string().email("email field required").required(),
  department: yup.string().required(),
});

export function AddMentorstudent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { values, handleChange, handleSubmit, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        mt_name: "",
        email: "",
        phone: "",
        department: "",
      },
      validationSchema: formvalidationschema,
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
                  onBlur={handleBlur}
                  className=" form-control"
                  name="mt_name"
                  onChange={handleChange}
                  value={values.mt_name}
                  placeholder="name"
                />{" "}
                {touched.mt_name && errors.mt_name ? errors.mt_name : ""}
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
                <label className="form-label">Department</label>
                <input
                  type="text"
                  name="department"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.department}
                  placeholder="Department"
                  className=" form-control"
                />{" "}
                {touched.department && errors.department
                  ? errors.department
                  : ""}
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
