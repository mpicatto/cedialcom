import React from 'react'
import {connect} from 'react-redux';
import {setData} from './../../actions/modals'
import './list.css'
import Carousel from './Carrousel'


const ImageLink = (props) => {

    const divId = props.data.id
    const imgPos = props.data.imgPos
    const imgUrl = props.data.imgUrl
    const titletype = props.data.titleType
    const title = props.data.title
    const subtitle = props.data.subtitle

    const setModal = () => {
      let data = {subtitle:subtitle,imgArray:props.data.imgArray}
      props.setData(data)      
    }

    const closeModal = () =>{
      window.location.reload()
    }
    
      return (
        <div id={divId}>
        <div className="container">
          <div className="row">
            {imgPos==="left"?
            <div className="col-xs-12 col-md-3" >
              <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">
                <img src={imgUrl} className="img-responsive" alt=""/>
              </button> 
            </div>:null}
            <div className="col-xs-12 col-md-9">
              <div className="about-text">
                {titletype==="title"?<h2 style={{paddingTop:"20"}}>{title}</h2>:null}
                {titletype==="subtitle"?<h3 >{subtitle}:</h3>:null}
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
            {imgPos==="right"?
            <div className="col-xs-12 col-md-3" style={{paddingTop:"20px"}}>
              <button type="button" className="btn btn-info btn-md" data-toggle="modal"
               data-target="#myModal" style={{backgroundColor:"#6372ff"}} onClick={()=>setModal()}>
                <img src={imgUrl} className="img-responsive" alt=""/>
              </button> 
            </div>:null}
          </div>
        </div>
        <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div  style={{display:'flex',flexDirection:'row', backgroundColor:'black', justifyContent:'space-between'}}>
              <h3 style={{color:'white',marginLeft:'10'}}>{props.modal.subtitle}</h3>
              <button style={{ color:'white', marginRight:'10'}} type="button" className="close"
               data-dismiss="modal" onClick={()=>closeModal()} >&times;</button>
            </div>
          <div style={{display:'flex',flexDirection:'column', backgroundColor:'black', justifyContent:'center'}}>
            <Carousel data={props.modal}/>
          </div>
          <div style={{display:'flex',flexDirection:'row', backgroundColor:'black', justifyContent:'end',padding:'10'}}>
            <button type="button" class="btn btn-default" data-dismiss="modal" onClick={()=>closeModal()}>Cerrar</button>
          </div>  
          </div>
        </div>
      <hr style={{backgroundColor:"#6372ff"}}/>  
      </div>
    )
   
}

const mapStateToProps = state => {
  return{
    modal:state.modals,

  }				
}

const mapDispatchToProps = dispatch => {
    return {
        setData:(data)=>dispatch(setData(data)),
      }
}

export default connect(mapStateToProps,mapDispatchToProps)(ImageLink)


