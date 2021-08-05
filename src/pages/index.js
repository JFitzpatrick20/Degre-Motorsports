import * as React from "react";
import Header from "../components/HomePage/header";
import Footer from "../components/HomePage/footer";
import About from "../components/HomePage/about";
import SocialMedia from "../components/SocialMedia/socialMedia";
import "../components/index.css";

const IndexPage = () => {
  return (
    <>
      <div className="content">
        <header className="headerHome">
          <Header />
        </header>

        <div className="aboutHome">
          <About />
        </div>
        <div className="socialMediaHome">
          <SocialMedia />
        </div>
        <footer className="footerHome">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default IndexPage;
