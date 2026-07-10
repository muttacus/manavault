function StoreDashboard() {
  return (
    <section className="hero">
      <h2>Store Dashboard</h2>
      <p>Manage inventory, sync platforms, and update card prices.</p>

      <div className="dashboardActions">
        <button>Connect Shopify</button>
        <button>Connect Lightspeed</button>
        <button>Connect Square</button>
        <button>Add Inventory</button>
      </div>
    </section>
  );
}

export default StoreDashboard;