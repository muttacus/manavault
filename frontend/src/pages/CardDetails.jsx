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
    <div className="cardDetails">
      <img src={imageUrl} alt={card.name} />

      <div>
        <h1>{card.name}</h1>
        <h2>{card.type_line}</h2>

        <p>{card.oracle_text}</p>

        <h3>Card Info</h3>
        <p>Set: {card.set_name}</p>
        <p>Rarity: {card.rarity}</p>
        <p>Mana Value: {card.cmc}</p>

        <h3>Prices</h3>
        <p>USD: ${card.prices?.usd || "N/A"}</p>
        <p>Foil: ${card.prices?.usd_foil || "N/A"}</p>

        <h3>Legality</h3>
        <p>Commander: {card.legalities?.commander}</p>
        <p>Modern: {card.legalities?.modern}</p>
        <p>Standard: {card.legalities?.standard}</p>
      </div>
    </div>
  );
}

export default CardDetails;