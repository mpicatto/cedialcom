import {SET_IMG_DATA} from '../actions/modals'
const initialState = {
  subtitle:"",
  imgArray:[]
};
export default function global(state = initialState, action){
if (action.type === SET_IMG_DATA){
    return{
      ...state,
      subtitle: action.payload.subtitle,
      imgArray:action.payload.imgArray
         }
  }

  return state
}  