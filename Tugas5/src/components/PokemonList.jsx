// src/components/PokemonList.js
import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import { fetchPokemonData } from '../api/pokemonApi';
import '../styles/PokemonList.css';
import { Link } from 'react-router-dom';


const PokemonList = ({ viewMode , setViewMode}) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('id');

  const toggleViewMode = () => {
    setViewMode(viewMode === 'grid' ? 'list' : 'grid');
  };

  useEffect(() => {
    const loadPokemon = async () => {
      setLoading(true);
      try {
        const data = await fetchPokemonData();
        setPokemon(data);
      } catch (error) {
        console.error('Error loading Pokemon data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPokemon();
  }, []);

  const sortPokemon = (pokemonList) => {
    switch (sortBy) {
      case 'name':
        return [...pokemonList].sort((a, b) => a.name.localeCompare(b.name));
      case 'type':
        return [...pokemonList].sort((a, b) => a.types[0].localeCompare(b.types[0]));
      case 'id':
      default:
        return [...pokemonList].sort((a, b) => a.id - b.id);
    }
  };

  const sortedPokemon = sortPokemon(pokemon);

  if (loading) {
    return <div className="loading">Loading Pokémon...</div>;
  }

  return (
    <div className="pokemon-list-container">
      <div className="list-controls">
        <div className="sort-dropdown">
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="id">Sort by ID</option>
            <option value="name">Sort by Name</option>
            <option value="type">Sort by Type</option>
          </select>
        </div>
        <div className="header-controls">
        
        <div className="view-toggle" onClick={toggleViewMode}>
            <span className={`view-icon ${viewMode === 'list' ? 'active' : ''}`}>
              ☰
            </span>
            <span className={`view-icon ${viewMode === 'grid' ? 'active' : ''}`}>
              ▦
            </span>
          </div>
        </div>
      </div>

      <div className={`pokemon-list ${viewMode}`}>
        {sortedPokemon.map(poke => (
          <PokemonCard 
            key={poke.id} 
            pokemon={poke} 
            listView={viewMode === 'list'} 
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;