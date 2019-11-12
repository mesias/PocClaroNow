import React from 'react';
import YouTube from 'react-youtube';
import "./video.css";


class VideoShowCase extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      main: props.mainVideo,
      thumbs: props.thumbVideos,
      width: window.innerWidth,
      height: window.innerHeight,
      hover: false,
    }
    this.youtubeRefMain = React.createRef();
    this.youtubeRef1 = React.createRef();
    this.youtubeRef2 = React.createRef();
    this.youtubeRef1div = React.createRef();
    this.youtubeRef2div = React.createRef();
  }


  toggleHover = (evt) => {
    console.log("TOGGLE", this.state.hover);
    if(!this.state.hover) {
      this.setState({hover: !this.state.hover})
      this.displayVideos();
    }
  }

  displayVideos = () => {
    this.youtubeRef1div.current.style.display = 'block'
    this.youtubeRef2div.current.style.display = 'block'
    this.youtubeRef1.current.internalPlayer.playVideo();
    this.youtubeRef2.current.internalPlayer.playVideo();
    setTimeout(() => {
      this.setState({hover: !this.state.hover})
      this.youtubeRef1div.current.style.display = 'none'
      this.youtubeRef2div.current.style.display = 'none'
      this.youtubeRef1.current.internalPlayer.pauseVideo();
      this.youtubeRef2.current.internalPlayer.pauseVideo();
    }, 10000);
  }

  render() {
    const opts = {
      height: this.state.height - 10,
      width: this.state.width,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        rel: 0,
        fs: 0,
        modestbranding: 1,
      }
    };
    const opts_min = {
      height: this.state.height * 0.2 ,
      width: this.state.width * 0.2,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        controls: 0,
        showinfo: 0,
        rel: 0,
        fs: 0,
        modestbranding: 1,
      }
    }

    return ( 
      < div className = "holder">
        <div  onMouseMove={this.toggleHover}>
          <YouTube videoId = { this.state.main }
            id="mainyoutube"
            ref = { this.youtubeRefMain }
            opts = { opts }
            onReady = { this._onReadyMain }
            onStateChange = { this._onStateChangeMain }
          />
        </div>
        <div className="bar1" ref={this.youtubeRef1div}>
          <YouTube videoId = { this.state.thumbs[0] }
            ref = { this.youtubeRef1 }
            opts = { opts_min }
            onReady = { this._onReadyMin }
          />
        </div> 
        <div className="bar2" ref={this.youtubeRef2div}>
          <YouTube videoId = { this.state.thumbs[1] }
            ref = { this.youtubeRef2 }
            opts = { opts_min }
            onReady = { this._onReadyMin }
          />
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
    // this.youtubeRef1.current.container.onmousemove = (evt) => console.log('move', evt)
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