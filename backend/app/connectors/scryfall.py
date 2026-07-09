import requests

BASE_URL = "https://api.scryfall.com"


def search_card(name: str):
    response = requests.get(
        f"{BASE_URL}/cards/named",
        params={"fuzzy": name},
        headers={"User-Agent": "ManaVault/0.1"},
    )

    print("Scryfall status:", response.status_code)
    print("Scryfall response:", response.text[:300])

    if response.status_code != 200:
        return None

    return response.json()
