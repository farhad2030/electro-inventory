import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { BiLogOutCircle } from "react-icons/bi";

const Topnavbar = () => {
  // firebase hook
  const [user, loading, error] = useAuthState(auth);
  const handelSignout = () => {
    signOut(auth);
  };
  console.log(user?.photoURL);

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Electro-inventory
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="inventory">
              Inventory
            </Nav.Link>

            {user ? (
              <>
                <Nav.Link as={Link} to="addItem">
                  Add Item
                </Nav.Link>

                <Nav.Link as={Link} to="inventory" state={{ from: "myItems" }}>
                  My Items
                </Nav.Link>
              </>
            ) : (
              ""
            )}
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
                <Nav.Link>
                  {user ? user.displayName : "not fount"}{" "}
                  <img
                    src={user?.photoURL}
                    style={{ width: "20px", borderRadius: "10px" }}
                    alt="userImg"
                  />
                </Nav.Link>
                <Nav.Link onClick={handelSignout}>
                  Signout <BiLogOutCircle />
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
