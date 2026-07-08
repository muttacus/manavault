import { useState } from "react";
import { searchCards } from "../services/scryfall";

function SearchBar() {
  const [search, setSearch] = useState("");

  async function handleSearch() {
    const cards = await searchCards(search);
    console.log(cards);
    alert(`Found ${cards.length} cards. Check the browser console.`);
  }

  return (
    <div className="searchBox">
      <input
        type="text"
        placeholder="Search cards..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;