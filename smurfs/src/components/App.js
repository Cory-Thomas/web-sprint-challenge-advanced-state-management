import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from ".././store/actions";
import "./App.css";
import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';

const App = ({ fetchSmurfs, loadingSmurfs, errorMessage }) => {
    useEffect( () => {
        fetchSmurfs();
      }, [ fetchSmurfs ]
    );
   
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        
        <SmurfForm />
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
