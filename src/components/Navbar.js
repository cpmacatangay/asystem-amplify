import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <header>
        <div className="px-3 py-2 text-bg-success">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <Link
                to="/"
                className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none fs-1"
              >
                {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg> */}
                <i className="bi bi-bootstrap"></i>
              </Link>

              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <Link to="/" className="nav-link text-white">
                    {/* <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#home"/></svg> */}
                    <i className="bi bi-megaphone me-2"></i>
                    Notice
                  </Link>
                </li>
                <li>
                  <Link to="/all-facility" className="nav-link text-white">
                    {/* <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#speedometer2"/></svg> */}
                    <i className="bi bi-folder me-2"></i>
                    All Facility
                  </Link>
                </li>
                <li>
                  <Link to="/add-facility" className="nav-link text-white">
                    {/* <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#speedometer2"/></svg> */}
                    <i className="bi bi-folder-plus me-2"></i>
                    Add Facility
                  </Link>
                </li>
                <li>
                  <Link to="/all-user" className="nav-link text-white">
                    {/* <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#people-circle"/></svg> */}
                    <i className="bi bi-people me-2"></i>
                    All User
                  </Link>
                </li>
                <li>
                  <Link to="/add-user" className="nav-link text-white">
                    {/* <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#people-circle"/></svg> */}
                    <i className="bi bi-person-add me-2"></i>
                    Add User
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="px-3 py-2 border-bottom mb-3">
          <div className="container d-flex flex-wrap justify-content-center">
            <form
              className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto"
              role="search"
            >
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-success me-2">
                Login
              </button>
              <button type="button" className="btn btn-outline-success">
                Register
              </button>
            </div>
          </div>
        </div> */}
      </header>
    </>
  );
};
