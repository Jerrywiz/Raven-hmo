import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="head-bg">
      <Navbar className="navbar navbar-expand-sm" collapseOnSelect expand="lg">
        <Container className="container-head">
          <Navbar.Toggle onClick={toggleMenu} />
          <Navbar.Collapse id="basic-navbar-nav" className={showMenu ? 'show' : ''}>
            <Nav className="ms-auto align-items-center">
              <Link to="/home" className="list-item text-decoration-none">
                Home
              </Link>
              <Link to="/about" className="list-item text-decoration-none">
                About
              </Link>
              <Link to="/service" className="list-item text-decoration-none">
                Service
              </Link>
              <Link to="/dentist" className="list-item text-decoration-none">
                Dentist
              </Link>
              <Link to="/contact" className="list-item text-decoration-none">
                Contact
              </Link>
              {user.email ? (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={logout}
                >
                  Log Out
                </button>
              ) : (
                <Link to="/login" type="button" className="btn btn-danger">
                  Login
                </Link>
              )}
              {user.email && (
                <Navbar.Text>
                  <FontAwesomeIcon icon={faUser} />
                  <span className="userName">{user.displayName}</span>
                </Navbar.Text>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
