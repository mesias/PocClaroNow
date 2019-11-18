import React, { useState } from "react";
import ArrayCarrossel from "../../assets/teste";
import "./CardCarousel.css";
import YouTube from "react-youtube";
import { withRouter } from 'react-router-dom';

const Menu = (props) => {
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
  // const onReady = event => {
  //   event.target.pauseVideo();
  // };
  const onReadyVideo = event => {
    event.target.setVolume(0);
  };

  
  return (
      <div className="content">
        <div className="content-container">
          <section className="container">
            {data.map((e, i) => {
              const arrVideos = data.map((ob) => ob.link)
              arrVideos.splice(data.indexOf(e.link), 1)
              return (<section key={i} className="item">                
                <YouTube
                  videoId={e.link}
                  opts={opts}
                  onReady = { onReadyVideo }
                ></YouTube>
                <div id={e.title} className='sobrepoe' onClick={() => props.history.push('/video', {
                                    mainVideo: e.link,
                                    thumbVideos: arrVideos,
                                  })}></div>                
              </section>
            )})}
          </section>
        </div>
      </div>
  );
}

export default withRouter(Menu);
