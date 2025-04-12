// src/components/PokemonDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPokemonById } from '../api/pokemonApi';
import PokemonCard from './PokemonCard';
import '../styles/PokemonDetail.css';

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPokemonDetails = async () => {
      setLoading(true);
      try {
        const data = await getPokemonById(parseInt(id));
        setPokemon(data);
      } catch (error) {
        console.error('Error loading Pokemon details:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPokemonDetails();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading Pokémon details...</div>;
  }

  if (!pokemon) {
    return <div className="error">Pokémon not found</div>;
  }

  return (
    <div className="pokemon-detail-container">
      <Link to="/" className="back-button">
        &larr; Back to List
      </Link>
      <PokemonCard pokemon={pokemon} detailView={true} />
    </div>
  );
};

export default PokemonDetail;