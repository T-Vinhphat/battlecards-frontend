import { Deck } from "../../components/Deck";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Display.css";
import { useNavigate } from "react-router-dom";

function Collection() {
  const [user, setUser] = useState({ decks: [] });

  const navigate = useNavigate();

  console.log(user.decks);
  let pseudo = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/profil/${pseudo.id}/my-collection`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <h1>Liste de decks</h1>
      <div>
        <button
          onClick={() => {
            navigate(`/profil/${pseudo.id}/CreateDeck`);
          }}
        >
          ajouter deck
        </button>
      </div>
      <div className="deckList">
        {user.decks.map((deck) => (
          <Deck {...deck} />
        ))}
      </div>
    </div>
  );
}

export default Collection;
