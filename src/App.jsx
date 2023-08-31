import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GameCard from "./components/GameCard";

const API_URL =
  "https://api.rawg.io/api/games?key=e379eb2393964750ade7fb1687b02a8e";
function App() {
  const [games, setGames] = useState([]);
  const searchGame = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();

    setGames(data.results);
  };
  useEffect(() => {
    searchGame();
  }, []);

  return (
    <div className="app">
      <h1>
        <span>GAME</span> <span>HUB</span>
      </h1>
      <div>
        <input
          type="text"
          name=""
          id=""
          placeholder="search games"
          value="PUBG"
        />
        <span className="material-symbols-outlined">search</span>
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
