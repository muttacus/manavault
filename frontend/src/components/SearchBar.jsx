import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    const trimmedSearch = search.trim();

    if (!trimmedSearch) {
      alert("Please enter a card name.");
      return;
    }

    navigate(`/search?query=${encodeURIComponent(trimmedSearch)}`);
  }

  return (
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
  );
}

export default SearchBar;