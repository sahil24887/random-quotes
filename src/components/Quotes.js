import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Quotes = () => {
    const[quotesList, setQuotesList] = useState({ content: '', author: '' });
    useEffect(() => {
        handleClick();
      }, []);
    const handleClick = async () =>{
        try{
        const response = await axios.get("https://api.quotable.io/random")
        const {content, author} = response.data
        console.log(content, author)
        setQuotesList({content, author})
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div>
    <div className='quote-text'>
      {quotesList.content}
    </div>
    <div className='quote-author'>
    {quotesList.author}
    </div>
    <button id='new-quote' onClick={handleClick}>next quote</button>
    </div>
  )
}

export default Quotes
