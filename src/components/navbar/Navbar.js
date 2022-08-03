import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../Assets/Logo1.png";
import Instagram from "../../Assets/Instagram.svg";
import Face_Book from "../../Assets/Face-Book.svg";
import Twitter from "../../Assets/twitter.svg";
import Discord from "../../Assets/discord.svg";

function NavbarWeb() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className="d-flex">
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="230px"
            height="auto"
            className="d-inline-block align-top mb-2"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">NFT</Nav.Link>
            <Nav.Link href="#pricing">CHALLENGES</Nav.Link>
            <Nav.Link href="#pricing">READ</Nav.Link>
            <Nav.Link href="#pricing">PARTNERS</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <img
                src={Face_Book}
                width="30px"
                height="40px"
                className="d-inline-block align-top mb-2"
                alt="React Bootstrap logo"
              />
            </Nav.Link>
            <Nav.Link href="#deets">
              <img
                src={Twitter}
                width="30px"
                height="40px"
                className="d-inline-block align-top mb-2"
                alt="React Bootstrap logo"
              />
            </Nav.Link>
            <Nav.Link href="#deets">
              <img
                src={Face_Book}
                width="30px"
                height="40px"
                className="d-inline-block align-top mb-2"
                alt="React Bootstrap logo"
              />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <img
                src={Instagram}
                width="30px"
                height="40px"
                className="d-inline-block align-top mb-2"
                alt="React Bootstrap logo"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarWeb;
