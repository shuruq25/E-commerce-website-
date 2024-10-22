import React, { useEffect, useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme); 
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <HomePage theme={theme} setTheme={setTheme} /> 
    </div>
  );
}

export default App;
