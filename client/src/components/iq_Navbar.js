import React from "react";
import { Link } from "react-router-dom";
import { Navbar as Nav } from "react-bootstrap";
import { logout } from "../services/auth";

const IqNavbar = props => {
  const handleLogout = () => {
    // destroys the session on the server
    logout();
    // updates the `user` state in App
    props.setUser(null);
  };

  return (
    <Nav className="nav justify-content-end" bg="primary" fixed="top">
      {props.user ? (
        <div>
          <Link to="/">Welcome {props.user.username}</Link>
          <Link to="/training">Training</Link>
          
          <Link to="/resultlist">Results</Link>
          <Link to="/" onClick={handleLogout}>Logout</Link>
        </div>
      ) : (
        <div>
          <Link to="/">Home</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </Nav>
  );
};

export default IqNavbar;
