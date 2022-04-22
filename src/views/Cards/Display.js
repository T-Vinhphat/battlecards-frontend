import { Card } from "../../components/Card";
import { useState, useEffect } from "react";
import "./Display.css";

const fakeList = [
  {
    imgSrc:
      "https://static.hitek.fr/img/actualite/ill_m/677768601/2438690.jpeg",
    cardPower: "5",
  },
  {
    imgSrc:
      "https://static.wikia.nocookie.net/heroes-fr/images/e/e3/King_OPM.webp/revision/latest/top-crop/width/360/height/450?cb=20210408080725&path-prefix=fr",
    cardPower: "9",
  },
];

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
