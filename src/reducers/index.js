import { combineReducers } from 'redux';
import weather from './reducer_weather';

// The RootReducer is used to collect all the different reducers' states and creating one reducer function to pass to the createStore method 
export default combineReducers({
  weather
})
