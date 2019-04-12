import axios from "axios";
import { GET_SMURFS, CREATE_SMURF, DELETE_SMURF, EDIT_SMURF } from "./types";

export const getSmurfs = () => dispatch => {
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({
        type: GET_SMURFS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const createSmurf = newSmurf => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      dispatch({
        type: CREATE_SMURF,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const deleteSmurf = id => dispatch => {
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_SMURF,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const editSmurf = (id, editedSmurf) => dispatch => {
  axios
    .put(`http://localhost:3333/smurfs/${id}`, editedSmurf)
    .then(res =>
      dispatch({
        type: EDIT_SMURF,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
