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
              <Nav.Link href="/discover">Discover</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
         </Navbar>
        // <div className="navigation">
        //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <a className="navbar-brand" href="#">NURecipes</a>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapses" id="navbarSupportedContent">
        //         <ul className="navbar-nav mr-auto">
        //         <li className="nav-item active">
        //             <a className="nav-link" href="/#">Home</a>
        //         </li>
        //         <li className="nav-item">
        //             <a className="nav-link" href="/discover">Discover</a>
        //         </li>
        //         <li className="nav-item">
        //             <a className="nav-link" href="/create">Create</a>
        //         </li>
        //         {/* <li className="nav-item dropdown">
        //             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //             Dropdown
        //             </a>
        //             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        //             <a className="dropdown-item" href="#">Action</a>
        //             <a className="dropdown-item" href="#">Another action</a>
        //             <div className="dropdown-divider"></div>
        //             <a className="dropdown-item" href="#">Something else here</a>
        //             </div>
        //         </li>
        //         <li className="nav-item">
        //             <a className="nav-link disabled" href="#">Disabled</a>
        //         </li> */}
        //         </ul>
        //         {/* <form className="form-inline my-2 my-lg-0">
        //         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        //         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        //         </form> */}
        //     </div>
        //     </nav>
        // </div>
    )
}

export default NavBar;