const API_BASE_URL = "http://127.0.0.1:8000";

export async function getInventory() {
  const response = await fetch(`${API_BASE_URL}/api/inventory`);

  if (!response.ok) {
    throw new Error("Could not load inventory");
  }

  return await response.json();
}