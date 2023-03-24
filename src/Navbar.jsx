import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className=" navbar navbar-expand-md bg-dark navbar-dark">
      <div className="container">
        <Link to={"/students"} className=" text-white navbar-brand">
          <i className="me-2 fa-solid fa-graduation-cap"></i>
          Management
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#mynav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="mynav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item active ">
              <Link to={"/students"} className="nav-link">
                Student
              </Link>
            </li>
            <li className="nav-item  ">
              <Link to={"/mentors"} className="nav-link">
                Mentor
              </Link>
            </li>
            <li className="nav-item ">
              <Link to={"/add/student"} className="nav-link">
                Add student
              </Link>{" "}
            </li>
            <li className="nav-item ">
              <Link to={"/add/mentor"} className="nav-link">
                Add Mentor
              </Link>{" "}
            </li>
            <li className="nav-item ">
              <Link to={"/assignstudent"} className="nav-link">
                Assign
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
