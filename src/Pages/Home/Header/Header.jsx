import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
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
      <Navbar className="navbar" expand="lg">
        <Container className="container-head">
          <Navbar.Toggle onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={showMenu ? "show" : ""}
          >
            <Nav className="ms-auto align-items-center">
              <Link
                to="/home"
                className="list-item text-decoration-none d-none d-lg-block"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="list-item text-decoration-none d-none d-lg-block"
              >
                About
              </Link>
              <Link
                to="/service"
                className="list-item text-decoration-none d-none d-lg-block"
              >
                Service
              </Link>
              <Link
                to="/dentist"
                className="list-item text-decoration-none d-none d-lg-block"
              >
                Dentist
              </Link>
              <Link
                to="/contact"
                className="list-item text-decoration-none d-none d-lg-block"
              >
                Contact
              </Link>
              {user.email ? (
                <button
                  type="button"
                  className="btn btn-danger d-none d-lg-block"
                  onClick={logout}
                >
                  Log Out
                </button>
              ) : (
                <Link
                  to="/login"
                  type="button"
                  className="btn btn-danger d-none d-lg-block"
                >
                  Login
                </Link>
              )}
              {user.email && (
                <Navbar.Text className="d-none d-lg-block">
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
