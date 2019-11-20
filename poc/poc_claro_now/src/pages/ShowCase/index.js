import React, { useState } from 'react';
import YouTube from 'react-youtube';
import tube from '../../consts/youtube'
import NavBar from '../../components/NavVideo';
import SideMenu from '../../components/SideMenu';
import "./video.css";

const VideoShowCase = (props) => {
  const [open, setOpen] = useState(false);
  const [screens, setScreens] = useState(1);

  const videos = [
    tube.Ano2015.PanFinalRevezamento4x200,
    tube.Ano2015.CampeonatoPiscinaCurta, 
    tube.Ano2015.Rio2016Natacao
  ];

  const tubeRef = videos.map((v) => React.createRef())

  const vwTOpx = (value) => {
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    var result = (x*value)/100;
    return result;
  }
  
  const width = window.innerWidth;
  const height = (window.innerHeight - vwTOpx(5.4));

  const opts = {
    height,
    width,
    playerVars: { // https://developers.google.com/youtube/player_parameters
      showinfo: 0,
      rel: 0,
      fs: 0,
      autoplay: 1,
      modestbranding: 1,
      enablejsapi: 1,
      origin: "http://localhost:3000",
    }
  };

  const _onReadyMain = (event) => {

  }

  const onImgClick = (scrs) => {
    console.log("New", scrs);
    setOpen(false);
    setScreens(scrs);
  }

  console.log("SCreens:", screens);
  return (
    <main className="container-main">
      <section className="container-nav">
        <NavBar open={open} setOpen={setOpen}/>
      </section>
      {screens === 1 &&
        <section>
            <div className = "holder">
              <YouTube videoId = { videos[0] }
                  id="mainyoutube"
                  ref = { tubeRef[0] }
                  opts = { opts }
                  onReady = { _onReadyMain }
                />
            </div>
        </section>
      }
       {screens === 2 &&
        <section>
            <div className = "holder-side">
              <YouTube videoId = { videos[0] }
                  id="mainyoutube2"
                  ref = { tubeRef[0] }
                  opts = { {...opts, height: height, width: width/2} }
                  onReady = { _onReadyMain }
                />
                <YouTube videoId = { videos[1] }
                  id="mainyoutube3"
                  ref = { tubeRef[0] }
                  opts = { {...opts, height: height, width: width/2} }
                  onReady = { _onReadyMain }
                />
            </div>
        </section>
      }
      {screens === 3 &&
        <section>
            <div className = "holder-side">
              <YouTube videoId = { videos[0] }
                  id="mainyoutube2"
                  ref = { tubeRef[0] }
                  opts = { {...opts, height: height/2, width: width/2} }
                  onReady = { _onReadyMain }
                />
                <YouTube videoId = { videos[1] }
                  id="mainyoutube3"
                  ref = { tubeRef[0] }
                  opts = { {...opts, height: height/2, width: width/2} }
                  onReady = { _onReadyMain }
                />
                <YouTube videoId = { videos[2] }
                  id="mainyoutube4"
                  ref = { tubeRef[0] }
                  opts = { {...opts, height: height/2, width: width} }
                  onReady = { _onReadyMain }
                />
            </div>
        </section>
      }
      {screens === 4 &&
        <section>
            <div className = "holder-side">
              <YouTube videoId = { videos[0] }
                  id="mainyoutube5"
                  ref = { tubeRef[0] }
                  opts = { {...opts, height: height/2, width: width/2} }
                  onReady = { _onReadyMain }
                />
                <YouTube videoId = { videos[1] }
                  id="mainyoutube6"
                  ref = { tubeRef[0] }
                  opts = { {...opts, height: height/2, width: width/2} }
                  onReady = { _onReadyMain }
                />
                <YouTube videoId = { videos[2] }
                  id="mainyoutube7"
                  ref = { tubeRef[0] }
                  opts = { {...opts, height: height/2, width: width/2} }
                  onReady = { _onReadyMain }
                />
                <YouTube videoId = { videos[0] }
                  id="mainyoutube8"
                  ref = { tubeRef[0] }
                  opts = { {...opts, height: height/2, width: width/2} }
                  onReady = { _onReadyMain }
                />
            </div>
        </section>
      }
      <section>
        <SideMenu open={open} screens={screens} onImgClick={onImgClick} ></SideMenu>
      </section>
    </main>
  )
};

export default VideoShowCase;