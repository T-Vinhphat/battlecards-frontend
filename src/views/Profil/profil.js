import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Profil() {
  const [profil, setProfil] = useState({});

  let pseudo = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/profil/${pseudo.id}`)
      .then((response) => response.json())
      .then((data) => setProfil(data));
  }, []);

  return (
    <div>
      <h1>Profil</h1>
      <ul>
        <li>Pseudo : {profil.pseudo}</li>
        <li>email : {profil.email}</li>
      </ul>
    </div>
  );
}

export default Profil;
