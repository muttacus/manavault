const API_BASE_URL = "http://127.0.0.1:8000";

export async function searchCards(query) {
  const response = await fetch(
    `${API_BASE_URL}/api/cards/${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("No cards found");
  }

  const card = await response.json();

  return [card];
}

export async function getCardById(id) {
  const response = await fetch(`https://api.scryfall.com/cards/${id}`);

  if (!response.ok) {
    throw new Error("Card not found");
  }

  return await response.json();
}