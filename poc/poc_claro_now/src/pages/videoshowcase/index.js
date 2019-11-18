import React from 'react';
import YouTube from 'react-youtube';
import "./video.css";


class VideoShowCase extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mainUrl: props.mainVideo,
      width: window.innerWidth,
      height: window.innerHeight - 10,
      childHeight: window.innerHeight * 0.2,
      childWidth: window.innerWidth * 0.2,
      child1Url: props.thumbVideos[0],
      child2Url: props.thumbVideos[1],
      hover: false,
    }

    this.youtubeRefMain = React.createRef();
    this.youtubeRef1 = React.createRef();
    this.youtubeRef2 = React.createRef();
    this.youtubeRef1div = React.createRef();
    this.youtubeRef2div = React.createRef();
    this.youtubeRef1divUp = React.createRef();
    this.youtubeRef2divUp = React.createRef();
    this.youtubeRefMainDiv = React.createRef();
  }


  

  toggleHover = (evt) => {
    console.log("TOGGLE", this.state.hover);
    if(!this.state.hover) {
      this.setState({hover: !this.state.hover})
      this.displayVideos();
    }
  }

  changeVideo = (id) => {
    console.log(id);
    // Retirar a div de id e jogar na main
    // depois colocar da Main na div do id
    // Fazer as alterações necessárias de tamanho e volume
    // let childDiv = id === 0 ? youtubeRef1div : youtubeRef2div;
    // let childTube = id === 0 ? youtubeRef1 : youtubeRef2;
    // const mainTube = youtubeRefMain.current;
    // const mainDiv = youtubeRefMainDiv.current;
    // const childDivSub = childDiv.current.removeChild(childDiv.current.childNodes[0]);   
    // const mainDivSub = mainDiv.removeChild(mainDiv.childNodes[0]);

    // debugger;
    // mainTube.internalPlayer.setSize(childWidth, childHeight);
    // childTube.current.internalPlayer.setSize(width, height);
    // childDiv.current.insertAdjacentElement("beforebegin", mainDivSub);
    // mainDiv.appendChild(childDivSub);
    // mainTube.internalPlayer.playVideo();
    // childTube.current.internalPlayer.playVideo();
  }

  switchVideoDiv = (show) => {
    if(show){
      this.youtubeRef1div.current.style.display = 'block'
      this.youtubeRef2div.current.style.display = 'block'
      this.youtubeRef1divUp.current.style.display = 'block'
      this.youtubeRef2divUp.current.style.display = 'block'
    } else {
      this.youtubeRef1div.current.style.display = 'none'
      this.youtubeRef2div.current.style.display = 'none'
      this.youtubeRef1divUp.current.style.display = 'none'
      this.youtubeRef2divUp.current.style.display = 'none'
    }
  }

  displayVideos = () => {
    this.switchVideoDiv(true)
    this.youtubeRef1.current.internalPlayer.playVideo();
    this.youtubeRef2.current.internalPlayer.playVideo();
    setTimeout(() => {
      this.switchVideoDiv(false)
      this.youtubeRef1.current.internalPlayer.pauseVideo();
      this.youtubeRef2.current.internalPlayer.pauseVideo();
      console.log("new state")
      this.setState({hover: !this.state.hover})
    }, 10000);
  }

  render() {
    console.log("New render")
    const opts = {
      height: this.state.height,
      width: this.state.width,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        start: this.state.mainTime,
        rel: 0,
        fs: 0,
        modestbranding: 1,
      }
    };
    const opts_min1 = {
      height: this.state.childHeight ,
      width: this.state.childWidth,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        controls: 0,
        showinfo: 0,
        rel: 0,
        fs: 0,
        modestbranding: 1,
        start: this.state.child1Time,
      }
    }

    const opts_min2 = {
      height: this.state.childHeight ,
      width: this.state.childWidth,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        controls: 0,
        showinfo: 0,
        rel: 0,
        fs: 0,
        modestbranding: 1,
        start: this.state.child2Time,
      }
    }

    return ( 
      < div className = "holder">
        <div  onMouseMove={this.toggleHover} ref={this.youtubeRefMainDiv}>
          <YouTube videoId = { this.state.mainUrl }
            id="mainyoutube"
            ref = { this.youtubeRefMain }
            opts = { opts }
            onReady = { this._onReadyMain }
            onStateChange = { this._onStateChangeMain }
          />
        </div>v
        <div className="bar1" ref={this.youtubeRef1div}>
          <YouTube videoId = { this.state.child1Url }
            ref = { this.youtubeRef1 }
            opts = { opts_min1 }
            onReady = { this._onReadyMin }
          />
        </div>
        <div className="bar1up" onClick={() => this.changeVideo(0)} ref={ this.youtubeRef1divUp }>
        </div>
        <div className="bar2" ref={this.youtubeRef2div}>
          <YouTube videoId = { this.state.child2Url }
            ref = { this.youtubeRef2 }
            opts = { opts_min2 }
            onReady = { this._onReadyMin }
          />
        </div>
        <div className="bar2up" onClick={() => this.changeVideo(1)}  ref={ this.youtubeRef2divUp }>
        </div>
      </div>
    );
  };

  _onReadyMin = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
    event.target.setVolume(0);
  }

  _onReadyMain = (event) => {
    // access to player in all event handlers via event.target
    // event.target.playVideo();
    // this.youtubeRefMain.current.container.onmousemove = (evt) => console.log('move', evt)
    // this.youtubeRef1.current.container.onclick = (evt) => console.log('onclick')
    this.toggleHover()
  }

  _onStateChangeMain = (event) => {
    console.log("onChange", event)
  }

  // componentDidMount() {
  //   if (this.youtubeRef.internalPlayer) {
  //     console.log("Try ALLOW autoplay");
  //     this.youtubeRef.internalPlayer.getIframe().then((iframe) => {
  //       console.log("Allow autoplay")
  //       iframe.setAttribute('allow', "autoplay");
  //     });
  //   } else {
  //     console.log("NO ALLOW autoplay");
  //   }
  // }

  // componentWillUnmount() {

  // }

  // updateWindowDimensions() {
  //   // this.setState({
  //   //   width: window.innerWidth,
  //   //   height: window.innerHeight
  //   // });

  //   if (this.youtubeRef.internalPlayer) {
  //     console.log(`Youtube W: ${window.innerWidth} H: ${window.innerHeight}`, this.youtubeRef)
  //     this.youtubeRef.internalPlayer.setSize(window.innerWidth, window.innerHeight)
  //     this.youtubeRef.forceUpdate()
  //   } else {
  //     console.log(`Youtube W: ${window.innerWidth} H: ${window.innerHeight}`)
  //   }
  // }

};

export default VideoShowCase;