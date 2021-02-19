import React,{use} from 'react'

const Video = (props)=>{
    
    return(
          <div
            className="video"
            style={{
              position: "relative",
              paddingBottom: "56.25%" /* 16:9 */,
              paddingTop: 10,
              height: 0,
              width:"80%",
              left: "10%",

            }}            
          >
            <div>
                <iframe
                title="Cedialcom"
                  style={{
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src={`https://www.youtube.com/embed/${props.videoId}`}
                  frameBorder="0"
                  allowFullScreen
                />
            </div>
        </div>

    )
}

export default Video