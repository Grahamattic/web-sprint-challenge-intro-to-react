import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [data, setData] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {

      axios
        .get('http://swapi.py4e.com/api/people/')
        .then(response => {
          console.log(response);
          setData(response.data.results)
        })

        .catch((err => console.log(err))
        )

  },[]); // Set an empty array as the second parameter to avoid an infite loop since we only want to fetch data once from the API.

    console.log(data);

    return (
        <div className="App">
            <h1 className="Header">Characters</h1>
            {data.map((char, index)=>
                <Character key={char.url} data={data[index]}/>
            )}
        </div>
    );
}

export default App;
