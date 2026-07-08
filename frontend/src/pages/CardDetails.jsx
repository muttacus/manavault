import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCardById } from "../services/scryfall";

function CardDetails() {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    async function loadCard() {
      const result = await getCardById(id);
      setCard(result);
    }

    loadCard();
  }, [id]);

  if (!card) {
    return <h1>Loading card...</h1>;
  }

  const imageUrl =
    card.image_uris?.normal || card.card_faces?.[0]?.image_uris?.normal;

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto" }}>
      <h1>{card.name}</h1>

      <img src={imageUrl} alt={card.name} style={{ width: "320px" }} />

      <h2>{card.type_line}</h2>
      <p>{card.oracle_text}</p>
    </div>
  );
}

export default CardDetails;