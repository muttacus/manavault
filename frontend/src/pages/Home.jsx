import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <section className="hero">
      <h2>The MTG Search Engine for Local Game Stores</h2>

      <p>
        Search every Magic card and instantly see which local stores have it in
        stock.
      </p>

      <SearchBar />
    </section>
  );
}

export default Home;