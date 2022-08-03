// import Nav from "./components/navbar/Navbar";
import Banner from "./components/banner/Bannner";
import FundingText from "./components/funding-text/FundingText";
import Rarity from "./components/RarityCard/Rarity";
import Challenge from "./components/challengesCarousal/Challenge";
import Blog from "./components/blog/Blog";
import Team from "./components/Team/Team";
import Faq from "./components/faq/Faq";
import Social from "./components/Socialmedia.js/Social";
import Footer from "./components/Footer/Footer";
import Check from "./components/check/check";
import "./App.css";

//navbar
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./Assets/Logo1.png";
import Instagram from "./Assets/Instagram.svg";
import Face_Book from "./Assets/Face-Book.svg";
import Twitter from "./Assets/twitter.svg";
import Discord from "./Assets/discord.svg";

function App() {
  return (
    <div className="main">
      <div className="mt-4">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container className="d-flex">
            <Navbar.Brand href="#nft">
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
                <Nav.Link href="#nft">NFT</Nav.Link>
                <Nav.Link href="#challenges">CHALLENGES</Nav.Link>
                <Nav.Link href="#read">READ</Nav.Link>
                <Nav.Link href="#partners">PARTNERS</Nav.Link>
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
      </div>
      <div className="mt-4">
        <Banner />
      </div>
      <div id="nft" className="mt-4">
        <FundingText />
      </div>
      <div className="mt-4">
        <Rarity />
      </div>
      <div id="challenges" className="mt-4">
        {" "}
        <Challenge />
      </div>
      <div id="read" className="mt-4">
        <Blog />
      </div>
      <div id="partners" className="mt-4">
        <Check />
      </div>
      <div className="mt-4">
        <Team />
      </div>
      <div className="mt-4">
        <Faq />
      </div>
      <div className="mt-5">
        <Social />
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}

export default App;
