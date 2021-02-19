import {SET_VIDEO,SET_DEFAULT_VID} from '../actions/displayVideo'
const initialState = {
    video:'dkjxfum84OE',
};
export default function global(state = initialState, action){
if (action.type === SET_VIDEO){
    return{
      ...state,
      video: action.payload
         }
  }

  if (action.type === SET_DEFAULT_VID){
    return state = initialState
         
  }
  return state
}  