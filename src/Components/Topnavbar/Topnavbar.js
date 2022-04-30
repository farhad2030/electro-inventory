import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { GoSignOut } from "react-icons/go";

const Topnavbar = () => {
  // firebase hook
  const [user, loading, error] = useAuthState(auth);
  const handelSignout = () => {
    signOut(auth);
  };

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Electro-inventory
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="#features">
              Features
            </Nav.Link>
            <Nav.Link as={Link} to="#pricing">
              Pricing
            </Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="#action/3.1">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.3">
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {!user ? (
              <>
                <Nav.Link
                  as={Link}
                  to="/authentication/login"
                  state={{ Islogin: true }}
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  eventKey={2}
                  as={Link}
                  to="/authentication/register"
                  state={{ Islogin: false }}
                >
                  Signup
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link>{user ? user.displayName : "not fount"}</Nav.Link>
                <Nav.Link onClick={handelSignout}>
                  Signout <GoSignOut />
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topnavbar;
