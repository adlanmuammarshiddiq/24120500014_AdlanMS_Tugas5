import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import Header from './components/Header';
import './App.css';

function App() {
  const [viewMode, setViewMode] = useState('grid');
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`app ${theme}`}>
      <Router>
        <Header
          theme={theme}
          setTheme={setTheme}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
        <Routes>
          <Route
            path="/"
            element={
              <PokemonList
                theme={theme}
                setTheme={setTheme}
                viewMode={viewMode}
                setViewMode={setViewMode}
              />
            }
          />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;