import PostCard from "./PostCard.jsx";
import Feed from "./Feed.jsx";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  signInWithGoogle,
  useUserState,
  signOut,
} from "../utilities/firebase.js";

const SignInButton = () => (
  <button
    className="btn btn-secondary btn-sm"
    onClick={() => signInWithGoogle()}
  >
    Sign In
  </button>
);

const SignOutButton = () => (
  <button className="btn btn-secondary btn-sm" onClick={() => signOut()}>
    Sign Out
  </button>
);

const NavBar = () => {
  const [user] = useUserState();
  return (
    <Navbar bg="light" expand="lg" className="navigation">
      <Container>
        <Navbar.Brand href="/#">NURecipes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#">Home</Nav.Link>
            <Nav.Link href="/discover/" data-cy="Discovery">
              Discover
            </Nav.Link>

            <NavDropdown title="Create" id="create">
              <NavDropdown.Item href="/create_post/">
                {" "}
                Create Post{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="/create_activity/">
                {" "}
                Create Activity{" "}
              </NavDropdown.Item>
            </NavDropdown>

            {user ? (
              <Nav.Link href="/profile/" data-cy="Profile">
                Profile
              </Nav.Link>
            ) : (
              <></>
            )}

            <Nav.Link>{user ? <SignOutButton /> : <SignInButton />}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;


