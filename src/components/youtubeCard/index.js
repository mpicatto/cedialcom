import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux';
import Carousel from './carrousel';
import Video from './video'

// const styles = {
//   position: "relative",
//   paddingBottom: "50%" /* 16:9 */,
//   paddingTop: 10,

//   width:"80%",
//   left: "10%",
//   backgroundColor:"black"
// }

const YoutubeCard = (props)=>{
    useEffect(()=>{
        setVideoId(props.videoId)
    },[props.videoId])
    
    const [videoId,setVideoId]=useState(props.videoId)
    
    return(
      <div className="container" style={{display:"flex",flexDirection:"row", justifyContent:"center", paddingBottom:"10%"}}>
           <div style={{ width:"90%"}}>
            <div>
              <div    
              >
                <Video videoId={videoId}/>     
              </div>
              <div  >
                <Carousel/>
              </div>
            </div>
          </div>
      </div>

    )
}

const mapStateToProps = state => {
    return{
      videoId:state.video.video,
    }				
  }
  

  
  export default connect(mapStateToProps)(YoutubeCard)
