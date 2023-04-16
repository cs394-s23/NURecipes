import PostCard from "./PostCard.jsx"
import Feed from "./Feed.jsx"
import "./NavBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" className="navigation">
        <Container>
          <Navbar.Brand href="/#">NURecipe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/#">Home</Nav.Link>
              <Nav.Link href="/discover/">Discover</Nav.Link>
              <Nav.Link href="/create/">Create</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
         </Navbar>
    )
}

export default NavBar;