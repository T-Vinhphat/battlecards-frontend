import { useNavigate } from "react-router-dom";

function Accueil() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>Battle Cards</h1>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          se connecter
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/signup");
          }}
        >
          s'inscrire
        </button>
      </div>
    </div>
  );
}

export default Accueil;
