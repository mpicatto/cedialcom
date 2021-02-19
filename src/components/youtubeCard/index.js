import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux';
import Carousel from './carrousel';
import Video from './video'

const styles = {
  position: "relative",
  paddingBottom: "60%" /* 16:9 */,
  paddingTop: 10,
  height: 0,
  width:"80%",
  left: "10%",
  backgroundColor:"black"
}

const YoutubeCard = (props)=>{
    useEffect(()=>{
        setVideoId(props.videoId)
    },[props.videoId])
    
    const [videoId,setVideoId]=useState(props.videoId)
    
    return(
          <div
            className="video"
            style={styles}            
          >
            <Video videoId={videoId}/>
            <Carousel/>
        </div>

    )
}

const mapStateToProps = state => {
    return{
      videoId:state.video.video,
    }				
  }
  

  
  export default connect(mapStateToProps)(YoutubeCard)
