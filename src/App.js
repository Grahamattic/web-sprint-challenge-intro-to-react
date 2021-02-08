
// Import dependencies
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characterData, setCharacterData] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {

      axios
        .get('https://swapi.dev/api/people/')
        .then(response => {
          console.log(response);
          setCharacterData(response.data.results)
        })

        .catch((err => console.log(err))
        )

  },[]); // Set an empty array as the second parameter to avoid an infite loop.
         // We only want to fetch data once from the API.

    console.log(characterData);

    return (
        <div className="App">
            <h1 className="Header">Characters</h1>
            {characterData.map((characterData, index)=>
                <Character key={characterData.url} data={characterData[index]}/>
            )}
        </div>
    );
}

export default App;
