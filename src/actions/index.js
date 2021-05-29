import axios from "axios";

export const LOADING_SMURFS = "LOADING_SMURFS";
export const SMURF_SUCCESS = "SMURF_SUCCESS";
export const SMURF_FAIL = "SMURF_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const ENTRY_ERROR = "ENTRY_ERROR";

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: LOADING_SMURFS });

  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      dispatch({ type: SMURF_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: SMURF_FAIL, payload: JSON.stringify(err) });
    });
};

export const addSmurf = (newSmurf) => (dispatch) => {
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: ADD_SMURF, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: SMURF_FAIL, payload: { err } });
    });
};

export const setError = () => (dispatch) => {
  dispatch({
    type: ENTRY_ERROR,
    payload: "Name, position and nickname fields are required.",
  });
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
