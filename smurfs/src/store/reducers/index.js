import {
    FETCH_SMURFS,
    FETCH_SMURFS_ERROR,
    FETCH_SMURFS_SUCCESS,
    ADD_SMURF
} from "../actions";

const initialState = {
    smurfs: [],
    loadingSmurfs: true,
    errorMessage: ""
};

export default ( state = initialState, action ) => {
    switch( action.type ) {
        case FETCH_SMURFS:
            return {
                ...state,
                loadingSmurfs: true
            };
        case FETCH_SMURFS_ERROR:
            return {
                ...state,
                loadingSmurfs: false,
                errorMessage: action.payload.message
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                loadingSmurfs: false
            };
        case ADD_SMURF:
            console.log(state, state.smurfs)
            return { 
                ...state, 
                smurfs: [ ...state.smurfs, action.payload ]};
        default:
            return state;
    };
};