import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import ImageStuff from './ImageThing';


function App() {

  const [stuff, setStuff] = useState({})

  useEffect(() => {
    console.log('hey it runs, yay!')

    axios.get("https://api.nasa.gov/planetary/apod?api_key=9B1Yd2sANHhNUzIyowoLKE1CJwruKZTQqad0ljS2")
    .then( result => {
      console.log('nasa result:', result);
      setStuff(result.data)
    })
    .catch( err => {
      console.log('something went wrong here')
    })
  }, [])



  return (
    <div className="App">
      <h1>
        STUFF !!!!
      </h1>
      <p>{stuff.copyright}</p>
      <ImageStuff stuff={stuff} />

    </div>
  );
}

export default App;
