function CardResult({ card }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "20px",
        padding: "20px",
        background: "#1f2937",
        borderRadius: "10px",
      }}
    >
      <img
        src={card.image_uris?.small || card.card_faces?.[0]?.image_uris?.small}
        alt={card.name}
        style={{ width: "146px" }}
      />

      <div>
        <h2>{card.name}</h2>

        <p>{card.type_line}</p>

        <p>{card.oracle_text}</p>
      </div>
    </div>
  );
}

export default CardResult;