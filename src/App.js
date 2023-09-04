import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [quote, setQuote] = useState({ content: '', author: '' });

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      const { content, author } = response.data;
      setQuote({ content, author });

      // Change the background color using the colors from App.js
      const colors = ['#FF5733', '#33FF57', '#5733FF', '#33BFFF', '#FF33BF'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = randomColor;
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };
  return (
    <div className="App">
        <div className='quote-container' style={{height: "100vh"}}>
      <div className='quote-text' style={{height: "20vh"}}>{quote.content}</div>
      <div className='quote-author' style={{height: "20vh"}}>- {quote.author}</div>
      <button id='new-quote' onClick={fetchQuote} style={{height: "50px", backgroundColor:"blue"}}>
        Next Quote
      </button>
    </div>
    </div>
  );
}

export default App;
