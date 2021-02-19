import React,{useState,useEffect} from 'react';
import Instagram from "./lib/Instagram";
// import Media from "./Media";


const Feed= (props) =>{

    useEffect(()=>{
        Instagram.getFeed(props.userName)
        .then(media=>{
            // setLoading(false)
            // setMedia(media.slice(0,props.limit))
            console.log(media)
        })
        .catch(error=>{
            alert("No se pudo obtener los datos de Instagram")
        })
    })

    // --------------------State constants-------------------------------------------------------
    const [defaultProps,setDefaultProps]=useState({        
                                                    className: props.className,
                                                    classNameLoading: props.classNameLoading,
                                                    limit: props.limit,})
    const [loading,setLoading]=useState(true)
    const [media,setMedia]=useState([])

    

    return  (<div>{"Instagram"}</div>)
}

export default Feed