/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import ArrayCarrossel from "../../assets/teste";
import "./CardCarousel.css";
import YouTube from "react-youtube";

const Menu = () => {
  const [data, setData] = useState([...ArrayCarrossel]);
  const [opts, setOpts] = useState({
    height: window.innerHeight * 0.3,
    width: window.innerWidth * 0.3,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      controls: 0,
      rel: 0,
      fs: 0,
      autoplay: 1,
      modestbranding: 1
    }
  });

  const onReady = event => {
    event.target.pauseVideo();
  };

  return (
    <>
      <div className="content">
        <div className="content-container">
          <section className="container">
            {data.map((e, i) => (
              <section key={i} className="item">
                <YouTube
                  videoId={e.link}
                  opts={opts}
                  className="youtube"
                ></YouTube>
              </section>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Menu;
