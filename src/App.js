import Nav from "./components/navbar/Navbar";
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

function App() {
  return (
    <div className="main">
      <div className="mt-4">
        <Nav />
      </div>
      <div className="mt-4">
        <Banner />
      </div>
      <div className="mt-4">
        <FundingText />
      </div>
      <div className="mt-4">
        <Rarity />
      </div>
      <div className="mt-4">
        {" "}
        <Challenge />
      </div>
      <div className="mt-4">
        <Blog />
      </div>
      <div className="mt-4">
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
