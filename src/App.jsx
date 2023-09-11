import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GameCard from "./components/GameCard";

// const API = "https://api.rawg.io/api/games?key=e379eb2393964750ade7fb1687b02a8e"

const BASE_API = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY
const API_URL = `${BASE_API}?key=${API_KEY}`

  
function App() {
  const [games, setGames] = useState([]);
  const [queryTerm,setQueryTerm]= useState('')
  const searchGame = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    console.log(data)

    setGames(data.results);
  };
  useEffect(() => {
    searchGame('');
  }, []);

  return (
    <div className="app">
      <h1>
        <span className="br_1">GAME</span> <span className="br_2">HUB</span>
      </h1>
      <div className="search">
        <input
        
          
         
          
          placeholder="Search game"
          value={queryTerm}
          onChange={(e)=> setQueryTerm(e.target.value)}
          
        />
        <span className="material-symbols-outlined search-icon" alt="search"
         onClick={()=> searchGame(queryTerm)}>search</span>
      </div>
      {games ? (
        <div className="container">
          {games.map((game) => <GameCard game={game} key={game.id} />
          )}
        </div>
      ) : 
        <h1>No games found</h1>
      }
    </div>
  );
}

export default App;
