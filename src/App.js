import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import TrackCourier from './components/TrackCourier';
import Header from './components/Header';

function App() {
  // State to track if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // State to store the logged-in user's name
  const [user, setUser] = useState('');

  // Function to handle login - called from Login component
  const handleLogin = (username) => {
    setUser(username);
    setIsLoggedIn(true);
  };

  return (
    <div className="app">
      {/* Header component - always visible */}
      <Header />
      {/* Conditional rendering: show Login if not logged in, else show TrackCourier */}
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <TrackCourier user={user} />
      )}
    </div>
  );
}

export default App;