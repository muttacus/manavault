export async function searchCards(query) {
  const response = await fetch(
    `https://api.scryfall.com/cards/search?q=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("No cards found");
  }

  const data = await response.json();
  return data.data;
}