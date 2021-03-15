import React from 'react'

const Video = (props)=>{
    
    return(
          <div
            style={{
              display:"flex",
              flexDirection:"row",
              justifyContent:"center",
              height:"100%",
              backgroundColor:"black",
              paddingTop:"5%"

            }}            
          >  
                <iframe
                title="Cedialcom"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  src={`https://www.youtube.com/embed/${props.videoId}`}
                  frameBorder="0"
                  allowFullScreen
                />
        </div>

    )
}

export default Video