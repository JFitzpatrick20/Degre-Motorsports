import * as React from "react";
import Header from "../components/HomePage/header";
import About from "../components/HomePage/about";
import SocialMedia from "../components/SocialMedia/socialMedia";

const IndexPage = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main style={{ display: "grid" }}>
        <div>
          <About />
        </div>
        <div className="socialMediaHome">
          <SocialMedia />
        </div>
      </main>
    </>
  );
};

export default IndexPage;
