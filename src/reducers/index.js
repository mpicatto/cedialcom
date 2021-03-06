import {combineReducers} from 'redux';
import clipData from './clipData'
import video from './displayVideo'
import modals from './modals'
export default combineReducers({
  clipData,video,modals
}) 