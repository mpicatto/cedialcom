export const SET_VIDEO = 'SET_VIDEO';
export const SET_DEFAULT_VID='SET_DEFAULT_VID'


export function setVideo(vid){
    return{type:SET_VIDEO , payload:vid}
  }
  
  export function setDefault(){
    return{type:SET_DEFAULT_VID}
  }