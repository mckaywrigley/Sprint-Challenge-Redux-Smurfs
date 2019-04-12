import {
  GET_SMURFS,
  CREATE_SMURF,
  DELETE_SMURF,
  EDIT_SMURF
} from "../actions/types";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        smurfs: action.payload
      };
    case CREATE_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    case DELETE_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    case EDIT_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    default:
      return state;
  }
}
