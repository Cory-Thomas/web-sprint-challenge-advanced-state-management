import React from "react";

const Movie = ({ smurf }) => {

  return (
    <div>
        <div><h2>{ smurf.name }</h2></div>
        <div><p>Age: { smurf.age } years old</p></div>
        <div><p>Height: { smurf.height }</p></div>
    </div>
  );
};

export default Movie;