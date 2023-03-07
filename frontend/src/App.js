import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const BASE = 'http://localhost:3000'

function App() {
  const [longUrl, setLongUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')

  const handleChange = e => {
    setLongUrl(e.target.value)
  }

  const submitData = async (e) => {
    e.preventDefault();

    if (longUrl.length !== 0) {
      try {
        let url = longUrl.toString().trim()
        const res = await axios.post(`${BASE}/url/shorten`, { url: url })
        setShortUrl(res.data)
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div className="App">
      <form onSubmit={submitData}>
        <input
        placeholder="Enter URL"
        type="text"
        id="url"
        value={longUrl}
        onChange={handleChange} />
        <button type="submit">Shorten</button>
        {shortUrl ? (
          <div className="short">
            Short URL: <a href={shortUrl} target="_blank" rel="noreferrer">{shortUrl}</a>
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default App;
