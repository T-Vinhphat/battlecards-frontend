import { Card } from "../../components/Card";
import { useState, useEffect } from "react";
import "./Display.css";

function DisplayPage() {
  const [list, setList] = useState([]);
  console.log(list);

  useEffect(() => {
    fetch("http://localhost:1337/cards")
      .then((result) => result.json())
      .then((result) => setList(result));
  }, []);

  return (
    <div>
      <h1>Cartes</h1>
      <div className="cardList">
        <h3>Deck 1</h3>
        {list.map((card) => (
          <Card imgSrc={card.imgSrc} cardPower={card.cardPower} />
        ))}
      </div>
    </div>
  );
}

export default DisplayPage;
