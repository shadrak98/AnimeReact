import React, { useEffect, useState } from "react";
import Quote from './Quote';
import './App.css';

function App() {

  const [quotes, setQuotes] = useState([]); //data is taken from this state and passed it to quotes component
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('naruto');

  useEffect( () => {
    getQuotes();
  },[query]);

  // const animeName = "Naruto";

  const getQuotes = async () => {
    const response = await fetch(`https://animechanapi.xyz/api/quotes?anime=${query}`);
    const data = await response.json();
    setQuotes(data.data);
  };

  // event for onchange of search bar
  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-input" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">search</button>
      </form>
      <div className="quotes">
      {quotes.map(quote => (
        <Quote 
          key={quote.quote}
          character={quote.character} 
          quote={quote.quote} 
        />
      ))}
      </div>
    </div>
  );
}

export default App;
