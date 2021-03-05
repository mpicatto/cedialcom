import React  from 'react'
import './list.css'

const ImageLink = (props) => {

    console.log(props)
    const divId = props.data.id
    const imgPos = props.data.imgPos
    const imgUrl = props.data.imgUrl
    const titletype = props.data.titleType
    const title = props.data.title
    const subtitle = props.data.subtitle
    
      return (
        <div id={divId}>
        <div className="container">
          <div className="row">
            {imgPos==="left"?<div className="col-xs-12 col-md-3" > 
            <img src={imgUrl} className="img-responsive" alt=""/> 
            </div>:null}
            <div className="col-xs-12 col-md-9">
              <div className="about-text">
                {titletype==="title"?<h2 style={{paddingTop:"20"}}>{title}</h2>:null}
                {titletype==="subtitle"?<h3 >{subtitle}</h3>:null}
                <p>{props.data ? props.data.paragraph : 'loading...'}</p>
                <div className="list-style">
                    <div >
                        <ul>
                            {props.data.lista ? props.data.lista.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : null}
                        </ul>
                    </div>
                </div>
              </div>
            </div>
            {imgPos==="right"?<div className="col-xs-12 col-md-3"> 
            <img src={imgUrl} className="img-responsive" alt=""/> 
            </div>:null}
          </div>
        </div>
      </div>
    )
   
}

export default ImageLink
