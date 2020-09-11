import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from ".././store/actions";
import "./App.css";
import Smurfs from './Smurfs';

const App = ({ fetchSmurfs, loadingSmurfs, errorMessage }) => {
    useEffect( () => {
        fetchSmurfs();
      }, [ fetchSmurfs ]
    );
   
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {/* <SmurfForm /> */}
        { !loadingSmurfs ? <Smurfs /> : <div>... Fetching Smurf Village</div> }
        { errorMessage !== "" ? <div>{ errorMessage }</div> : null }
       
      </div>
    );
};

const mapStateToProps = state => {
  return {
    loadingSmurfs: state.loadingSmurfs,
    errorMessage: state.errorMessage
  };
};

export default connect( mapStateToProps, { fetchSmurfs })( App );
