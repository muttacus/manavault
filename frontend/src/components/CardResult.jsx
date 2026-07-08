import { useNavigate } from "react-router-dom";

function CardResult({ card }) {
  const navigate = useNavigate();
  const imageUrl =
    card.image_uris?.small || card.card_faces?.[0]?.image_uris?.small;

  return (
    <div className="cardResult">
      <img src={imageUrl} alt={card.name} />

      <div>
        <h2>{card.name}</h2>
        <p>{card.type_line}</p>
        <p>{card.oracle_text}</p>

        <button onClick={() => navigate(`/card/${card.id}`)}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default CardResult;