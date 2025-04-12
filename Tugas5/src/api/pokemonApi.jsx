// src/api/pokemonApi.js

// Mock Pokemon data
const mockPokemonData = [
    {
      id: 1,
      name: "Bulbasaur",
      types: ["Grass", "Poison"],
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      health: 144,
      maxHealth: 1000,
      attack: 32,
      defense: 50
    },
    {
      id: 4,
      name: "Charmander",
      types: ["Fire"],
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      health: 130,
      maxHealth: 1000,
      attack: 38,
      defense: 45
    },
    {
      id: 7,
      name: "Squirtle",
      types: ["Water"],
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      health: 140,
      maxHealth: 1000,
      attack: 35,
      defense: 52
    },
    {
      id: 10,
      name: "Caterpie",
      types: ["Bug"],
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
      health: 100,
      maxHealth: 1000,
      attack: 20,
      defense: 30
    },
    {
      id: 25,
      name: "Pikachu",
      types: ["Electric"],
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      health: 120,
      maxHealth: 1000,
      attack: 40,
      defense: 30
    },
    {
      id: 39,
      name: "Jigglypuff",
      types: ["Normal", "Fairy"],
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
      health: 170,
      maxHealth: 1000,
      attack: 25,
      defense: 20
    },
    {
      id: 133,
      name: "Eevee",
      types: ["Normal"],
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
      health: 140,
      maxHealth: 1000,
      attack: 30,
      defense: 35
    },
    {
      id: 143,
      name: "Snorlax",
      types: ["Normal"],
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
      health: 280,
      maxHealth: 1000,
      attack: 60,
      defense: 65
    }
  ];
  
  // Simulate API fetch delay
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
  // Fetch all Pokemon
  export const fetchPokemonData = async () => {
    await delay(800); // Simulate network delay
    return mockPokemonData;
  };
  
  // Get Pokemon by ID
  export const getPokemonById = async (id) => {
    await delay(500); // Simulate network delay
    const pokemon = mockPokemonData.find(p => p.id === id);
    if (!pokemon) {
      throw new Error(`Pokemon with ID ${id} not found`);
    }
    return pokemon;
  };