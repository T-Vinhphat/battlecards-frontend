import { Deck } from "../../components/Deck";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Display.css";

function Collection() {
  const [user, setUser] = useState({ decks: [] });

  console.log(user.decks);
  let pseudo = useParams();

  useEffect(() => {
    fetch(`http://localhost:1337/profil/${pseudo.id}/my-collection`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <h1>Liste de decks</h1>
      <div className="deckList">
        {user.decks.map((deck) => (
          <Deck {...deck} />
        ))}
      </div>
    </div>
  );
}

export default Collection;
