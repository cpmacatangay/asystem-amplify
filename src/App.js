import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { AllNotice } from "./pages/Notice/AllNotice";
import { AddNotice } from "./pages/Notice/AddNotice";
import { AllFacility } from "./pages/Facility/AllFacility";
import { AddFacility } from "./pages/Facility/AddFacility";
import { AllUser } from "./pages/User/AllUser";
import { AddUser } from "./pages/User/AddUser";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App({ signOut, user }) {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="px-3 py-2 border-bottom mb-3">
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
              <button type="button" className="btn btn-link disabled me-2 text-dark text-decoration-none">
              {user.username}
              </button>
              {/* <Heading level={3}>{user.username}</Heading> */}
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={signOut}
              >
                <i className="bi bi-box-arrow-right me-2"></i>Logout
              </button>
              {/* <Button className="btn btn-outline-danger" onClick={signOut}>Sign out</Button> */}
            </div>
          </div>
        </div>
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<AllNotice />}></Route>
          <Route path="/add-notice" element={<AddNotice />} />
          <Route path="/all-facility" element={<AllFacility />} />
          <Route path="/add-facility" element={<AddFacility />} />
          <Route path="/all-user" element={<AllUser />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default withAuthenticator(App);
