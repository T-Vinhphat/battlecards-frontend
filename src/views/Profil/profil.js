import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const defaultStat = { win: null, lose: null };

function Profil() {
  const [profil, setProfil] = useState({ stat: defaultStat });

  let pseudo = useParams();

  console.log(profil.stat);
  useEffect(() => {
    fetch(`http://localhost:1337/profil/${pseudo.id}`)
      .then((response) => response.json())
      .then((data) => setProfil(data));
  }, []);

  return (
    <div>
      <h1>Profil</h1>
      <ul>
        <li>Pseudo : {profil.pseudo}</li>
        <li>email : {profil.email}</li>
        <li>password : {profil.password}</li>
        <li>
          stat W/L : {profil.stat.win}/{profil.stat.lose}
        </li>
      </ul>
    </div>
  );
}

export default Profil;
