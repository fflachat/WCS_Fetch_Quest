import './App.css';
import { useState } from 'react';
import axios from 'axios';
import DisplaySimpsons from './components/DisplaySimpsons';

const sampleSimpson = {
  quote: 'Oh Yeah!',
  character: 'Duffman',
  image:
    'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FDuffman.png?1497567511709',
  characterDirection: 'Left',
};

function App() {
  const [simpson, setSimpson] = useState(sampleSimpson);

  const getQuote = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setSimpson(data[0]);
      });
  };

  return (
    <div className="App">
      <DisplaySimpsons simpson={simpson} />

      <button type="button" onClick={getQuote}>
        Get Simpson's quote
      </button>
    </div>
  );
}

export default App;
