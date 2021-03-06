import React  from 'react'

const Text = (props) => {

    const divId = props.data.id
    const imgPos = props.data.imgPos
    const imgUrl = props.data.imgUrl
    const titletype = props.data.titleType
    const title = props.data.title
    const subtitle = props.data.subtitle
    
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
                {titletype==="title"?<h2 style={{paddingTop:"20"}}>{title}</h2>:null}
                {titletype==="subtitle"?<h3 >{subtitle}</h3>:null}
                <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              </div>
            </div>
            {imgPos==="right"?<div className="col-xs-12 col-md-6"> 
            <img src={imgUrl} className="img-responsive" alt=""/> 
            </div>:null}
          </div>
        </div>
        <hr style={{backgroundColor:"#6372ff"}}/>
      </div>
    )
    }else{
      return(
      <div id={divId}>
        <div className="container">
          <div className="column">
            <div className="about-text">
              {titletype==="title"?<h2 style={{paddingTop:"20"}}>{title}</h2>:null}
              {titletype==="subtitle"?<h3 >{subtitle}</h3>:null}
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
            </div>
          </div>
        </div>
        {titletype===""||titletype==="title"||props.data.paragraph===""?null:<hr style={{backgroundColor:"#6372ff"}}/>}
      </div>)
    }

}

export default Text
