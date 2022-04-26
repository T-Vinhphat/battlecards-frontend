import React from "react";
import "./CreateDeck.css";
import { Card } from "../../components/Card";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CreateDeck() {
  const [list, setList] = useState([]);
  const [isChecked, setIsChecked] = useState(
    new Array(list.length).fill(false)
  );

  let pseudo = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:1337/cards")
      .then((result) => result.json())
      .then((result) => {
        setList(result);
        setIsChecked(new Array(result.length).fill(false));
      });
  }, []);

  function isCardSelected(_, index) {
    return isChecked[index];
  }

  async function submit(event) {
    event.preventDefault();
    const filteredList = list.filter(isCardSelected);
    const idCards = filteredList.map((a) => a.id);
    console.log(idCards);
    const submit = await fetch(
      `${process.env.REACT_APP_API_URL}/profil/my-collection/add`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(idCards),
      }
    );
    if (!submit.ok) {
      alert("le deck n'as pas été créé");
    } else {
      await navigate(`/profil/${pseudo.id}/collection`);
    }
  }

  const handleOnChange = (position) => {
    const updatedCheckedState = isChecked.map((item, index) =>
      index === position ? !item : item
    );
    setIsChecked(updatedCheckedState);
  };

  return (
    <div>
      <h1>Liste des Cartes</h1>
      <form onSubmit={submit}>
        {list.map((card, index) => (
          <div>
            <Card imgSrc={card.imgSrc} cardPower={card.cardPower} />
            <input
              type="checkbox"
              name="SelectCard"
              value={card.id}
              checked={isChecked[index]}
              onChange={() => handleOnChange(index)}
            />
          </div>
        ))}

        <label>nom du deck: </label>
        <input placeholder="deck" type="text" name="deckName" />
        <button>Créer</button>
      </form>
    </div>
  );
}

export default CreateDeck;
