import React from 'react';
import './Carrousel.css'

const Carrousel = (props) =>{

console.log(props)


    return(

            <div id="PhotoCarousel" className="carousel slide" data-ride="carousel" style={{backgroundColor:"black"}}>
                <ol className="carousel-indicators">
                    <li data-target="#PhotoCarousel" data-slide-to={props.data.imgArray[0]} class="active"></li>
                    {props.data.imgArray.map((item,i)=>{
                        if(i>0){
                            return <li data-target="#PhotoCarousel" data-slide-to={i} class="active"></li>
                        }else{
                            return null
                        }
                    })}
                </ol>
                <div className="carousel-inner">
                    <div className="item active">
                        <img src={props.data.imgArray[0]} alt="" class="image"/>
                    </div>
                    {props.data.imgArray.map((item,i)=>{
                        if(i>0){
                            return(
                            <div className="item">
                                <img src={item} alt="" class="image"/>
                            </div>
                            )
                        }else{
                            return null
                        }
                    })}

                    <a className="left carousel-control" href="#PhotoCarousel" data-slide="prev">
                    <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#PhotoCarousel" data-slide="next">
                    <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
  
    )
}

export default Carrousel
