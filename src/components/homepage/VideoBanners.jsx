import React from "react";
import "./../../style.css";

import $ from "jquery";
const VideoBanner = () => {
  return (
    <div className="image video" style={{ background: "#212529" }}>
      <video
        className="videoTag"
        autoPlay
        loop
        muted
        style={{ opacity: "0.1" }}
      >
        <source
          src="https://www.dailykit.org/hubfs/dailykit-assets/home-video-3.mp4"
          type="video/mp4"
        />
      </video>
      <div className="header">
        <div style={{ color: "#aab6f6",fontSize:"32px" }}>Time to EVOLVE with</div>
        <h2 class="nunito">DailyKIT</h2>
        <br />
        <h5 style={{ color: "white",fontWeight: "bold",
    fontSize: "18px",paddingTop: "8px",
    
    paddingBottom: "8px" }}>
          The only Trend-Responsive Food-tech solution You'll Ever Need
        </h5>
        <br />
        <h4
          id="yourElem" class="all-text"
          onclick={setInterval(() => {
            var array = [
              "Increase Bottom-Line Margin",
              "Grow Top-Line Revenue",
              "Mitigate Risk and Achieve Sustainability",
              "Grow Top-Line Revenue",
            ];
            $("#yourElem").text(array[Math.floor(Math.random() * 4) + 0]);
          }, 2000)}
         
        >
          Multiple Your Brand Awareness
        </h4>
        <br />
        <br />
        <button type="button" className="btn-style-thirteen white">
          <a href="/" >
            Schedule Demo
          </a>
        </button>
        &ensp;
        <button type="button" className="btn btn-primary btn-lg homebutton">
          <a href="/" style={{color: "white" }}>
            Start Now With A 3-Month Trail
          </a>
        </button>
        <br />
        <br />
        <h6 style={{ color: "lightblue" }}>
          Available for a Limited time Only
        </h6>
      </div>
    </div>
  );
};

export default VideoBanner;
