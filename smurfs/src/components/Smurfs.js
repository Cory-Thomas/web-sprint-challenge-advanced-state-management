import React from 'react';
import { connect } from "react-redux";
import Smurf from "./Smurf";

const Smurfs = ({ smurfs }) => {
    console.log(smurfs)
    return (
        <div>
            { smurfs.map( smurf => {
            return <Smurf key={ smurf.id } smurf={ smurf } />
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return {
      smurfs: state.smurfs
    };
  };

export default connect( mapStateToProps, {})( Smurfs );