import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

function ImageStuff(things) {

  console.log('things', things);
  console.log('more things', things.stuff.hdurl)



  return (
    <div className="App">
      <p>Image would have went here!</p>
      <img src={things.stuff.hdurl}></img>
      <p>{things.stuff.explanation}</p>

    </div>
  );
}

export default ImageStuff;
