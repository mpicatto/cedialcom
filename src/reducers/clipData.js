import {SET_DATA,DELETE_DATA} from '../actions/clipData'
const initialState = {
    data:[],
};
export default function global(state = initialState, action){
if (action.type === SET_DATA){
    return{
      ...state,
      data: action.payload
         }
  }

  if (action.type === DELETE_DATA ){
    return state = initialState        
  }
  return state
}  