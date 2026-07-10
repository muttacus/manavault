const API_BASE_URL = "http://127.0.0.1:8000";

export async function syncPlatform(platform, storeId) {
  const response = await fetch(
    `${API_BASE_URL}/api/sync/${platform}/${storeId}`,
    {
      method: "POST",
    }
  );

  if (!response.ok) {
    throw new Error(`Could not sync ${platform}`);
  }

  return await response.json();
}