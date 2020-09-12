import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../store/actions/smurfActions";

const initialState = {
    name: '',
    age: '',
    height: "",
    id: ''
};

const SmurfForm = props => {
    const [ smurf, setSmurf ] = useState( initialState );

    const handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;

        setSmurf({ 
            ...smurf, 
            [ name ]: value 
        });
    };

    const addSmurfToVillage = event => {
        event.preventDefault();
        const addedSmurf = {
            name: smurf.name,
            age: smurf.age,
            height: `${smurf.height}cm`,
            id: Date.now()
        };

        props.addSmurf( addedSmurf );
        setSmurf( initialState );
        console.log(smurf)
    };

    return (
        <div>
            <h2>Add Smurf to Village</h2>
            <form onSubmit={ addSmurfToVillage } >
                <label htmlFor='name'>Name: </label>
                <input 
                    type='text'
                    name='name'
                    id='name'
                    value={ smurf.name }
                    onChange={ handleChange }
                    placeholder='Enter name'
                ></input>
                <label htmlFor='age'>Age: </label>
                <input 
                    type='number'
                    name='age'
                    id='age'
                    value={ smurf.age }
                    onChange={ handleChange }
                    placeholder='Enter age'
                ></input>
                <label htmlFor='height'>Height: </label>
                <input 
                    type='number'
                    name='height'
                    id='height'
                    value={ smurf.height }
                    onChange={ handleChange }
                    placeholder='Enter height'
                ></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
      name: state.name,
      age: state.age,
      height: state.height
    };
};

export default connect( mapStateToProps, { addSmurf })( SmurfForm );