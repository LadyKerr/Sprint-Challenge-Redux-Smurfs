import {  
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE
} from '../actions';

const initialState = {
  smurfs: [],
  error: '',
  fetchingSmurfs: false,
  addingSmurf: false
}

const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        error: '',
        fetchingSmurfs: true
      }
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        error: '',
        fetchingSmurfs: false,
        smurfs: action.payload
      }
    case FETCH_SMURF_FAILURE:
      return {
          ...state,
          error: action.payload,
          fetchingSmurfs: false
      }
    case ADD_SMURF_START:
      return {
        ...state,
        error: '',
        addingSmurf: true
    }
    case ADD_SMURF_SUCCESS:
      return{
        ...state,
        error: '',
        addingSmurf: false,
        smurfs: action.payload
      }
    case ADD_SMURF_FAILURE:
      return{
        ...state,
        error: action.payload,
        addingSmurf: false
      }
    default:
     return state;
  }
}

export default smurfReducer;

//add smurf function later

/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
