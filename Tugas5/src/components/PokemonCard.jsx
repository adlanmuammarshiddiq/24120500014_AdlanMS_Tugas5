// src/components/PokemonCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PokemonCard.css';

const PokemonCard = ({ pokemon, listView = false, detailView = false }) => {
  const { id, name, types, image, health, maxHealth, attack, defense } = pokemon;

  // Simple card for list view
  if (listView) {
    return (
      <Link to={`/pokemon/${id}`} className="pokemon-card list-view">
        <img src={image} alt={name} className="pokemon-image" />
        <div className="pokemon-info">
          <p className="pokemon-name">{name}</p>
          <div className="pokemon-types">
            {types.map((type, index) => (
              <span key={index} className={`type-badge ${type.toLowerCase()}`}>
                {type}
              </span>
            ))}
          </div>
        </div>
        <span className="pokemon-id">#{id.toString().padStart(4, '0')}</span>
      </Link>
    );
  }

  // Grid view card
  if (!detailView) {
    return (
      <Link to={`/pokemon/${id}`} className="pokemon-card">
        <img src={image} alt={name} className="pokemon-image" />
        <div className="pokemon-info">
          <p className="pokemon-name">{name}</p>
          <div className="pokemon-types">
            {types.map((type, index) => (
              <span key={index} className={`type-badge ${type.toLowerCase()}`}>
                {type}
              </span>
            ))}
          </div>
        </div>
        <span className="pokemon-id">#{id.toString().padStart(4, '0')}</span>
      </Link>
    );
  }

  // Detail view
  return (
    <div className="pokemon-card detail-view">
      <span className="pokemon-id">#{id.toString().padStart(4, '0')}</span>
      <img src={image} alt={name} className="pokemon-image-large" />
      <h2 className="pokemon-name">{name}</h2>
  
      <div className="pokemon-stats-box">
        <div className="stat-header">Health</div>
        <div className="stat-bar-wrapper">
          <div
            className="health-bar"
            style={{ width: `${(health / maxHealth) * 100}%` }}
          ></div>
        </div>
        <div className="health-text">
          <span className="health-value">{health}</span> from {maxHealth}
        </div>
        <tr></tr>
        <hr></hr>
        <div className="atk-def">
          <div className="stat-block">
            <div className="stat-title">Attack</div>
            <div className="stat-number">{attack}</div>
          </div>
          <div className="stat-block">
            <div className="stat-title">Defense</div>
            <div className="stat-number">{defense}</div>
          </div>
        </div>
      </div>
    </div>
  );  
};

export default PokemonCard;