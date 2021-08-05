import React from "react";
import Header from "../components/HomePage/header";
import Footer from "../components/HomePage/footer";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Drivers = () => {
  return (
    <div style={{ height: "100vh" }}>
      <header className="headerHome">
        <Header />
      </header>
      <div>
        <h1 style={{ textAlign: "center" }}>Drivers</h1>
      </div>

      <div className="fitzpatrick-card">
        <Card style={{ width: "18rem", marginLeft: "15px" }}>
          <Card.Img
            variant="top"
            src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-picture-icon-png-image_695350.jpg"
          />
          <Card.Body>
            <Card.Title>Greg Fitzpatrick</Card.Title>
            <Card.Text>
              Greg Fitzpatrick is the driver of the number 28 USAC racecar.
            </Card.Text>
            <a
              href="https://twitter.com/gregf28?ref_src=twsrc%5Etfw"
              class="twitter-follow-button"
              data-show-count="false"
            >
              Follow @gregf28
            </a>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
            <br />
            <a
              href="https://twitter.com/intent/tweet?screen_name=gregf28&ref_src=twsrc%5Etfw"
              class="twitter-mention-button"
              data-show-count="false"
            >
              Tweet to @gregf28
            </a>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
            <br />
            <a
              href="https://twitter.com/intent/tweet?button_hashtag=gregf28&ref_src=twsrc%5Etfw"
              class="twitter-hashtag-button"
              data-show-count="false"
            >
              Tweet #gregf28
            </a>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </Card.Body>
        </Card>
      </div>

      <footer className="footerHome">
        <Footer />
      </footer>
    </div>
  );
};

export default Drivers;
