import React from 'react';
import YouTube from 'react-youtube';


class VideoShowCase extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      main: props.mainVideo,
      thumbs: props.thumbVideos,
      width: window.innerWidth,
      height: window.innerHeight,
    }
    this.youtubeRef = React.createRef();
  }
  render() {
    const opts = {
      height: this.state.height,
      width: this.state.width,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        rel: 0,
        fs: 0,
      }
    };

    return ( <
      YouTube videoId = {
        this.state.main
      }
      ref = {
        this.youtubeRef
      }
      opts = {
        opts
      }
      onReady = {
        this._onReady
      }
      />
    );
  };

  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
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