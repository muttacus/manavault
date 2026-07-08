import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { searchCards } from "../services/scryfall";
import CardResult from "../components/CardResult";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const [cards, setCards] = useState([]);

  const query = searchParams.get("query");

  useEffect(() => {
    async function loadCards() {
      if (!query) return;

      try {
        const results = await searchCards(query);
        setCards(results);
      } catch (error) {
        console.error(error);
      }
    }

    loadCards();
  }, [query]);

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto" }}>
      <h1>Results for "{query}"</h1>

      {cards.length === 0 ? (
        <p>No cards found.</p>
      ) : (
        cards.map((card) => (
          <CardResult key={card.id} card={card} />
        ))
      )}
    </div>
  );
}

export default SearchResults;