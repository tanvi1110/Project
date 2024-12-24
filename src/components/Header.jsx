import React from "react";
// import '';

const Header = () => {
  return (
    <div className="group-header text-center text-white">
      <div className="group-header-overlay"></div>
      <div className="group-header-content container">
        <h1 className="fs-3">Computer Engineering</h1>
        <p className="mb-2">142,765 Computer Engineers follow this</p>
        <button className="btn btn-primary btn-sm btn-join-group">
          Join Group
        </button>
      </div>
    </div>
  );
};

export default Header;
