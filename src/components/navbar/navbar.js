import { Link, useNavigate } from "react-router-dom";

import "../navbar/navbar.css";

export function Navbar(setConnected) {
  const navigate = useNavigate();

  function disconnect() {
    navigate("/");
    localStorage.removeItem("jwt");
  }

  return (
    <nav className="navbar">
      <Link className="element" to="/">
        Accueil
      </Link>
      <Link className="element" to="/cards">
        Liste de cartes
      </Link>
      <Link className="element" to="/create">
        Créer un deck
      </Link>
      <Link className="element" to="/profil">
        Profil
      </Link>
      <a className="element disconnect" onClick={disconnect}>
        Se déconnecter
      </a>
    </nav>
  );
}
