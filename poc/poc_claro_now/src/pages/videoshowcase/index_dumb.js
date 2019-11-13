import React from 'react';
import YouTube from 'react-youtube';
import "./video.css";

const VideoShowCase = (props) => {

  let youtubeRefMain = React.createRef();
  let youtubeRef1 = React.createRef();
  let youtubeRef2 = React.createRef();
  let youtubeRef1div = React.createRef();
  let youtubeRef2div = React.createRef();
  let youtubeRef1divUp = React.createRef();
  let youtubeRef2divUp = React.createRef();
  let youtubeRefMainDiv = React.createRef();
  let hover = false;

  const mainUrl = props.mainVideo;
  const width = window.innerWidth;
  const height = window.innerHeight - 10;
  const childHeight = window.innerHeight * 0.2;
  const childWidth = window.innerWidth * 0.2;
  const child1Url = props.thumbVideos[0];
  const child2Url = props.thumbVideos[1];

  const switchVideoDiv = (show) => {
    if(show){
      youtubeRef1div.current.style.display = 'block';
      youtubeRef2div.current.style.display = 'block';
      youtubeRef1divUp.current.style.display = 'block';
      youtubeRef2divUp.current.style.display = 'block';
    } else {
      youtubeRef1div.current.style.display = 'none';
      youtubeRef2div.current.style.display = 'none';
      youtubeRef1divUp.current.style.display = 'none';
      youtubeRef2divUp.current.style.display = 'none';
    }
  };

  

  const displayVideos = () => {
    console.log("TOGGLE GO");
    switchVideoDiv(true)
    youtubeRef1.current.internalPlayer.playVideo();
    youtubeRef2.current.internalPlayer.playVideo();
    setTimeout(() => {
      switchVideoDiv(false)
      youtubeRef1.current.internalPlayer.pauseVideo();
      youtubeRef2.current.internalPlayer.pauseVideo();
      hover = !hover;
      console.log("TOGGLE BACK")
    }, 10000);
  };

  const toggleHover = (evt) => {
    if(!hover) {
      hover = !hover;
      displayVideos();
    }
  }

  const _onReadyMin = (event) => {
    // // access to player in all event handlers via event.target
    // if(event.target.getPlayerState() == 2){
    //   event.target.playVideo();
    // }    
    event.target.setVolume(0);
  }

  const _onReadyMain = (event) => {
    // access to player in all event handlers via event.target
    // event.target.playVideo();
    // youtubeRefMain.current.container.onmousemove = (evt) => console.log('move', evt)
    // youtubeRef1.current.container.onclick = (evt) => console.log('onclick')
    // if(event.target.getPlayerState() == 2){
    //   event.target.playVideo();
    // }
    toggleHover();
  }

  const changeVideo = (id) => {
    console.log(id);
    // Retirar a div de id e jogar na main
    // depois colocar da Main na div do id
    // Fazer as alterações necessárias de tamanho e volume
    let childDiv = id === 0 ? youtubeRef1div : youtubeRef2div;
    let childTube = id === 0 ? youtubeRef1 : youtubeRef2;
    const mainTube = youtubeRefMain.current;
    const mainDiv = youtubeRefMainDiv.current;
    const childDivSub = childDiv.current.removeChild(childDiv.current.childNodes[0]);   
    const mainDivSub = mainDiv.removeChild(mainDiv.childNodes[0]);

    // debugger;
    mainTube.internalPlayer.setSize(childWidth, childHeight);
    childTube.current.internalPlayer.setSize(width, height);
    childDiv.current.appendChild(mainDivSub);
    mainDiv.appendChild(childDivSub);

    if(id === 0){
      youtubeRef1 = youtubeRefMain;
    } else {
      youtubeRef2 = youtubeRefMain;
    }
    youtubeRefMain = childTube;

    // mainTube.internalPlayer.playVideo();
    // childTube.current.internalPlayer.playVideo();

  }
  


  const opts = {
    height: height,
    width: width,
    playerVars: { // https://developers.google.com/youtube/player_parameters
      controls: 0,
      showinfo: 0,
      rel: 0,
      fs: 0,
      autoplay: 1,
      modestbranding: 1,
    }
  };

  const opts_min = {
    height: childHeight ,
    width: childWidth,
    playerVars: { // https =//developers.google.com/youtube/player_parameters
      controls: 0,
      showinfo: 0,
      rel: 0,
      fs: 0,
      autoplay: 1,
      modestbranding: 1,
    }
  }

  return (
      <div className = "holder">
        <div  onMouseMove={toggleHover} ref={youtubeRefMainDiv}>
          <YouTube videoId = { mainUrl }
            id="mainyoutube"
            ref = { youtubeRefMain }
            opts = { opts }
            onReady = { _onReadyMain }
          />
        </div>
        <div className="bar1" ref={youtubeRef1div}>
          <YouTube videoId = { child1Url }
            ref = { youtubeRef1 }
            opts = { opts_min }
            onReady = { _onReadyMin }
          />
        </div>
        <div className="bar1up" onClick={() => changeVideo(0)} ref={youtubeRef1divUp }>
        </div>
        <div className="bar2" ref={youtubeRef2div}>
          <YouTube videoId = { child2Url }
            ref = { youtubeRef2 }
            opts = { opts_min }
            onReady = { _onReadyMin }
          />
        </div>
        <div className="bar2up" onClick={() => changeVideo(1)}  ref={youtubeRef2divUp }>
        </div>
      </div>
  )
};

export default VideoShowCase;