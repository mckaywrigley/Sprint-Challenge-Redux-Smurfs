import axios from "axios";
import { GET_SMURFS, CREATE_SMURF } from "./types";

export const getSmurfs = () => dispatch => {
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({
        type: GET_SMURFS,
        payload: res.data
      });
      console.log(res.data);
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
