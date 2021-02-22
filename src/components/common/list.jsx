import React  from 'react'
import './list.css'

const List = (props) => {

    console.log(props)
    const divId = props.data.id
    const imgPos = props.data.imgPos
    const imgUrl = props.data.imgUrl

    
    if (imgPos === "left" || imgPos === "right"){
      return (
        <div id={divId}>
        <div className="container">
          <div className="row">
            {imgPos==="left"?<div className="col-xs-12 col-md-6"> 
            <img src={imgUrl} className="img-responsive" alt=""/> 
            </div>:null}
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
               <div className="list-style">
                    <div >
                        <ul>
                            {props.data ? props.data.lista.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                        </ul>
                    </div>
                </div>
              </div>
            </div>
            {imgPos==="right"?<div className="col-xs-12 col-md-6"> 
            <img src={imgUrl} className="img-responsive" alt=""/> 
            </div>:null}
          </div>
        </div>
      </div>
    )
    }else{
      return(
      <div id={divId}>
        <div className="container">
          <div className="column">
            <div className="about-text">
                <div className="list-style">
                    <div >
                        <ul >
                            {props.data ? props.data.lista.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                        </ul>
                    </div>
                </div>  
            </div>
          </div>
        </div>
      </div>)
    }

}

export default List