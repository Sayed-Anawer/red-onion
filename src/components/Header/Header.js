import React from "react";
import logo from "../../images/logo2.png";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img
            className="ms-md-5"
            style={{ width: "150px" }}
            src={logo}
            alt=""
          />

          <form className="d-flex">
            <button className="btn btn-light me-sm-3">Log in</button>
            <button
              className="btn btn-danger me-md-5 px-md-4 px-2"
              style={{ borderRadius: "50px" }}
            >
              Sign up
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Header;
