import {SET_SOCIAL} from '../actions/switches'
const initialState = {
    social:'youtube',
};
export default function global(state = initialState, action){
if (action.type === SET_SOCIAL){
    return{
      ...state,
      social: action.payload
         }
  }

  return state
}  