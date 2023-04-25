import PostCard from "./PostCard.jsx";
import Feed from "./Feed.jsx";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  signInWithGoogle,
  useUserState,
  signOut,
} from "../utilities/firebase.js";

const NavBar = () => {
  const SignInButton = () => (
    <Nav.Link
      // className="btn btn-secondary btn-sm"
      onClick={() => signInWithGoogle()}
      // type="submit"
      className="nav-link"
    >
      Sign In
    </Nav.Link>
  );

  const SignOutButton = () => (
    <Nav.Link
      // className="btn btn-secondary btn-sm"
      onClick={() => signOut()}
      // type="submit"
      href="/#"
      className="nav-link"
    >
      Sign Out
    </Nav.Link>
  );

  const [user] = useUserState();
  return (
    <Navbar bg="light" expand="lg" className="navigation">
      <Container className="nav-container">
        <a href="/#">
          <img src="/logo.png" alt="logo" className="logo" height="72"/>
        </a>
        <Navbar.Brand href="/#">NURecipes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link
              href="/discover/"
              className="nav-link"
              data-cy="Discovery"
            >
              Discover
            </Nav.Link>

            {user ? (
              <NavDropdown title="Create">
                <NavDropdown.Item href="/create_post/" className="nav-link">
                  {" "}
                  Create Post{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/create_activity/" className="nav-link">
                  {" "}
                  Create Activity{" "}
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <></>
            )}

            {user ? (
              <Nav.Link href="/profile/" data-cy="Profile" className="nav-link">
                Profile
              </Nav.Link>
            ) : (
              <></>
            )}

            {user ? <SignOutButton /> : <SignInButton />}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
