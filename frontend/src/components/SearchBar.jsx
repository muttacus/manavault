import { useState } from "react";
import { searchCards } from "../services/scryfall";
import CardResult from "./CardResult";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [cards, setCards] = useState([]);

  async function handleSearch() {
    try {
      alert(`Searching for: ${search}`);

      const results = await searchCards(search);

      console.log(results);
      alert(`Found ${results.length} cards`);

      setCards(results);
    } catch (error) {
      console.error(error);
      alert("Search failed. Check the console.");
    }
  }

  return (
    <>
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search cards..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div style={{ maxWidth: "900px", margin: "50px auto" }}>
        {cards.map((card) => (
          <CardResult key={card.id} card={card} />
        ))}
      </div>
    </>
  );
}

export default SearchBar;