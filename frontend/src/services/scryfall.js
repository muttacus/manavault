export async function searchCards(query) {
  const response = await fetch(
    `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("No cards found");
  }

  const card = await response.json();

  // Return an array so the rest of your code doesn't have to change.
  return [card];
}
export async function getCardById(id) {
  const response = await fetch(`https://api.scryfall.com/cards/${id}`);

  if (!response.ok) {
    throw new Error("Card not found");
  }

  return await response.json();
}