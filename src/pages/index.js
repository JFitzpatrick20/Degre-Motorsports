import * as React from "react";
import Header from "../components/HomePage/header";
import About from "../components/HomePage/about";
import SocialMedia from "../components/SocialMedia/socialMedia";
import "../components/index.css";
import Footer from "../components/HomePage/footer";

const IndexPage = () => {
  return (
    <>
      <div className="content">
        <header className="headerHome">
          <Header />
        </header>
        <main>
          <div className="aboutHome">
            <About />
          </div>
          <div className="socialMediaHome">
            <SocialMedia />
          </div>
        </main>
        <footer className="footerHome">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default IndexPage;
