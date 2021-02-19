export const SET_DATA = 'SET_DATA';
export const DELETE_DATA = 'DELETE_DATA';

export function setData(clips){
    return{type:SET_DATA , payload:clips}
  }
  
  export function setRedirectOff(){
    return{type: DELETE_DATA}
  }