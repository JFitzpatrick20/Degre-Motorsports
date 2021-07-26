import React from "react";
import TwitterModal from "./twitterModal";
import "./socialMedia.css";

const SocialMedia = () => {
  return (
    <div className="socialMediaBox">
      <div className="socialMediaTitle">
        <h1>Check Out USCANation On Twitter</h1>
        <div className="socialMediaFooter">
          <a
            href="https://twitter.com/USACNation?ref_src=twsrc%5Etfw"
            className="twitter-follow-button"
            data-show-count="false"
          >
            Follow @USACNation
          </a>
        </div>
      </div>
      <div className="socialMediaContent">
        <TwitterModal />
      </div>
      <div className="socialMediaFooter">
        <a
          href="https://twitter.com/USACNation?ref_src=twsrc%5Etfw"
          className="twitter-follow-button"
          data-show-count="false"
        >
          Follow @USACNation
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
