import React,{useEffect} from 'react';
import axios from 'axios';


const Instagram = (props) =>{

    
    const instagramFeeds = async() =>{
        await axios.get(' https://api.instagram.com/v1/users/self/media/recent/?access_token=IGQVJWSC1QV1c4d01EVlp5TE1sWUd0aFpqQlRpVEFPMXN5WU1HSU1xY0tKRU9PX2ZAmUjhIZAzQwSGZAReU9wVGpWNVZAXWVhRcUYwRlZALYlpCQXpORU9MQkd0ZA1hBdzN2azVmUUVmckZAMV21BOWR3YWh6MwZDZD ')
    }

      

    return  (
    <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around'}}> 
       
    </div> 
    )
}

export default Instagram