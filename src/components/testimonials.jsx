import React, { useState,useEffect } from 'react'
import Axios from 'axios'
import {connect} from 'react-redux';
import {setData} from '../actions/clipData'
import Youtube from './youtubeCard/index'
import Instagram from './instagramCard/index'
import './testimonials.css'



export function Novedades(props) {

  useEffect(()=>{
    getData(props)
  },[])

  const getData=(props)=>{
    Axios.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=RDCJgHn7MeAwc&key=AIzaSyCQZQbFx_cgVf4x3GlU38IIzZIxlqWDueg")
    .then(res=>{
        let array=[]
        res.data.items.map(item => {
            let object={}
            object.publishedAt=item.snippet.publishedAt
            object.videoId=item.snippet.resourceId.videoId
            object.thumbnail=item.snippet.thumbnails.medium.url
            array.push(object)
        })
        array.sort((a,b) => (a.publishedAt > b.publishedAt)?1:(a.publishedAt === b.publishedAt)?((a.title >b.title)?1:-1):-1).reverse()
        array.map(object=>{
          object.publishedAt=object.publishedAt.replace('T',' ')
          object.publishedAt=object.publishedAt.split(' ')
          object.publishedAt=object.publishedAt[0].split('-').reverse().join('-')
        })
        props.setData(array)
    })
    .catch(err=>{
      alert("Datos no disponibles")
    })
  }

  const [social, setsSocial] = useState('youtube')

  const handleSocial = (e)=>{
    console.log(e.target.value)
    setsSocial(e.target.value)
  }

    return (
      <div id="novedades" >
          <div className="section-title text-center">
            <h2>Novedades</h2>
          </div>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'center',paddingBottom:'20'}}>
            <div class="btn-group" role="group" aria-label="...">
              <button 
                type="button"
                class="btn btn-default "
                value="youtube" 
                onClick={(e)=>handleSocial(e)}>Youtube</button>
              <button 
                type="button" 
                class="btn btn-default" 
                value="instagram" 
                onClick={(e)=>handleSocial(e)}>Instagram</button>
            </div>
          </div>
          {social==='youtube'?<div><Youtube data={props.data}/></div>:
          <div><Instagram/></div>} 
      </div>
    );
  
}

const mapStateToProps = state => {
  return{
    data:state.clipData.data,

  }				
}

const mapDispatchToProps = dispatch => {
    return{setData:(clipData)=>dispatch(setData(clipData))}
}

export default connect(mapStateToProps,mapDispatchToProps)(Novedades)

