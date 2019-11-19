import React from 'react';
import YouTube from 'react-youtube';
import tube from '../../consts/youtube'
import NavBar from "../../components/NavVideo";
import "./video.css";

const VideoShowCase = (props) => {

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
    height: height,
    width: width,
    playerVars: { // https://developers.google.com/youtube/player_parameters
      showinfo: 0,
      rel: 0,
      fs: 0,
      autoplay: 1,
      modestbranding: 1,
    }
  };

  const _onReadyMain = (event) => {

  }
  
  return (
    <main className="container-main">
      <section className="container-nav">
        <NavBar/>
      </section>  
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
    </main>
  )
};

export default VideoShowCase;