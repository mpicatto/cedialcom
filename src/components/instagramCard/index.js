import React from 'react';
import Feed from "react-instagram-authless-feed"


const Instagram = (props) =>{


    return  (
    <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around'}}> 
        <Feed userName="cedialcom" className="Feed" classNameLoading="Loading" limit="10"/>
    </div> 
    )
}

export default Instagram