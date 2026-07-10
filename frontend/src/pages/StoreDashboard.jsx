import { useEffect, useState } from "react";
import { getInventory } from "../services/inventory";
import { syncPlatform } from "../services/sync";

function StoreDashboard() {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadInventory() {
      try {
        const items = await getInventory();
        setInventory(items);
      } catch (err) {
        console.error(err);
        setError("Could not load inventory.");
      } finally {
        setLoading(false);
      }
    }

    loadInventory();
  }, []);

  async function handleSync(platform) {
    try {
      const result = await syncPlatform(platform, 1);
      alert(`${platform} sync status: ${result.status}`);
    } catch (err) {
      console.error(err);
      alert(`Could not sync ${platform}.`);
    }
  }

  const totalCards = inventory.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const inventoryValue = inventory.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <main className="storeDashboard">
      <section className="dashboardHeader">
        <div>
          <p className="eyebrow">Store Dashboard</p>
          <h1>Welcome, Dragon&apos;s Lair</h1>
          <p>Manage inventory, platform connections, and store activity.</p>
        </div>

        <button onClick={() => handleSync("shopify")}>
          Sync Inventory
        </button>
      </section>

      <section className="dashboardStats">
        <article className="statCard">
          <span>Total Cards</span>
          <strong>{totalCards}</strong>
        </article>

        <article className="statCard">
          <span>Inventory Value</span>
          <strong>${inventoryValue.toFixed(2)}</strong>
        </article>

        <article className="statCard">
          <span>Inventory Records</span>
          <strong>{inventory.length}</strong>
        </article>
      </section>

      <section className="dashboardPanel">
        <h2>Connected Platforms</h2>

        <div className="platformRow">
          <span>Shopify</span>
          <button onClick={() => handleSync("shopify")}>Sync</button>
        </div>

        <div className="platformRow">
          <span>Lightspeed</span>
          <button onClick={() => handleSync("lightspeed")}>Connect</button>
        </div>

        <div className="platformRow">
          <span>Square</span>
          <button onClick={() => handleSync("square")}>Connect</button>
        </div>
      </section>

      <section className="dashboardPanel">
        <h2>Inventory</h2>

        {loading && <p>Loading inventory...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && inventory.length === 0 && (
          <p>No inventory found.</p>
        )}

        {inventory.map((item) => (
          <div className="inventoryRow" key={item.id}>
            <span>{item.card_name}</span>
            <span>Qty {item.quantity}</span>
            <span>${item.price.toFixed(2)}</span>
          </div>
        ))}
      </section>
    </main>
  );
}

export default StoreDashboard;