import React,{useEffect} from 'react'
import {connect} from 'react-redux';
import {setVideo,setDefault} from './../../actions/displayVideo'
import CarrouselComponent from 'react-elastic-carousel'

const Carrousel = (props)=>{

    useEffect(()=>{
        props.setDefault()
    })

    const handleOnClick = (e,videoId,props)=>{
        e.preventDefault()
        props.setVideo(videoId)
    }

    return(
        <div style={{
            position: "relative",
            top: "60%",
            left: "5%",
            width: "90%",
            height:"30%"
            
          }}>
            <CarrouselComponent itemsToShow={1} pagination={false}>
                {props.data.map(item =>
                 
                <div className="portfolio-item" >
                    <div  className="hover-bg" style={{alignItems:"center"}}>
                    <a href={''} onClick={(e)=>handleOnClick(e,item.videoId,props)}>
                        <div className="hover-text">
                           
                            <h6>{item.title}</h6>
                            <h6>{item.publishedAt}</h6>
                          
                        </div>
                        <img src={item.thumbnail} style={{height:"70%", width:"100%"}} />
                    </a>    
                    </div>
                </div>)
                }
            </CarrouselComponent>
        </div>    
    )
}

const mapStateToProps = state => {
    return{
      data:state.clipData.data,
  
    }				
  }
  
  const mapDispatchToProps = dispatch => {
      return {
          setVideo:(vid)=>dispatch(setVideo(vid)),
          setDefault:()=>dispatch(setDefault())
        }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Carrousel)

