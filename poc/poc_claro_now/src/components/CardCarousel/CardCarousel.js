import React, { useState } from "react";
import ArrayCarrossel from "../../assets/teste";
import "./CardCarousel.css";
import YouTube from "react-youtube";
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom'

const Menu = () => {
  const [data, setData] = useState([...ArrayCarrossel]);
  const [opts, setOpts] = useState({
    
    width: '420',
    height: '190',
    playerVars: {
      controls: 0,
      rel: 0,
      fs: 0,
      autoplay: 1,
      modestbranding: 1
    }
    
  });
  
  const onReadyVideo = event => {
    event.target.setVolume(0);
  };

  
  return (
    <>    
      {/* <div className="content">         */}
        {/* <div className="content-container"> */}
          <section className="container">
            {data.map((e, i) => (
              <section key={i} className="item">                
                <YouTube
                  videoId={e.link}
                  opts={opts}
                  onReady = { onReadyVideo }
                ></YouTube>
                {/* <div id={e.title} className='sobrepoe'></div>                 */}
              </section>
            ))}
          </section>
        {/* </div> */}
      {/* </div> */}

      
    </>
  );
}


export default Menu;
