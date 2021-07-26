import React from "react";

const TwitterModal = () => {
  return (
    <div className="twitterContent">
      <a
        className="twitter-timeline"
        href="https://twitter.com/USACNation?ref_src=twsrc%5Etfw"
      >
        Tweets by USACNation
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
      <br></br>
      <script
        style={{ minHeight: "50px" }}
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
    </div>
  );
};

export default TwitterModal;
