// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {

  return (
    <header className="app-header">
      <Link to="/" className="logo">
        <img src="https://s3-alpha-sig.figma.com/img/abe5/b4f7/6e48daef706733ef8f90203a266320dc?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DUXha6aNFaPNZD4CeDpaBjrohnIFLeMet39836DbD8cp2dZvZInZr0P3dwD~frGqA03zD-bTdHeTmRUMWoRTrHjJcWtsj0tEVq6WDv4l1xkjBFV4PN-jAn8AuDAK-a3~H9LDzucEyVivquxLD2AM9Ijrb84Rw3Z4pOs~aQOsVcMB8VnBF86-KpkUac2HwUwYyh3YcKO0IeQ34sD8OYQ36kR~Dh3P~n8PbFQ6-~LBBCuzYwr9ySBijEjz9NQY8BcS1DWTlfXsrVfmI884nYHW7SxrZNpF2ji9oNLSf2vooF-XqLVQJMNpzXvX1L0bW8ezTgudSQhs2wJeL51KuTV7Xg__" alt="Pokémon" className="pokemon-logo" />
      </Link>
      
      <div className="header-controls">
        
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;