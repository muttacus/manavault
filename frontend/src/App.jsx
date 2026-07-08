import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />

      <section className="hero">
        <h2>The MTG Search Engine for Local Game Stores</h2>

        <p>
          Search every Magic card and instantly see which local stores have it
          in stock.
        </p>

        <div className="searchBox">
          <input
            placeholder="Search cards, effects, abilities..."
          />

          <button>Search</button>
        </div>
      </section>
    </div>
  );
}

export default App;