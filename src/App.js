import React, { useState } from 'react';
import Posts from './Posts';
import './App.css';

const App = () => {
  const [userId, setUserId] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    if (value >= 1 && value <= 10) {
      setUserId(value);
    } else {
      alert("Please enter a number between 1 and 10.");
    }
  };

  return (
    <div className='container'>
    <div className="app">
      <h1>Enter a number between 1 and 10 (inclusive)</h1>
      <input
        type="number"
        value={userId}
        onChange={handleChange}
      />
      {userId && <Posts userId={userId} />}
    </div>
    </div>
  );
};

export default App;
