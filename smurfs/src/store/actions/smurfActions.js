import axios from "axios";

export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR";

export const fetchSmurfs = () => {
  return ( dispatch ) => {
    dispatch({ type: FETCH_SMURFS });
    axios
      .get( "http://localhost:3333/smurfs" )
        .then( response => {
            console.log( response.data );
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data })
        })
        .catch( error => {
            console.log( error );
            dispatch({
                type: FETCH_SMURFS_ERROR,
                payload: { message: "Smurf Village did not load" }
         });
    });
    };
};