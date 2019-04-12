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
