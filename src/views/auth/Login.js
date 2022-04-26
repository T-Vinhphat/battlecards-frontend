import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage(setConnected) {
  const [body, setBody] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function updateBody(key, value) {
    setBody({ ...body, [key]: value });
  }

  function handleChangeInput(e) {
    const { name, value } = e.target;
    updateBody(name, value);
  }

  async function handleSubmitLogin(event) {
    event.preventDefault();
    console.log(body);
    fetch("http://localhost:1337/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("jwt", result.jwt);
        navigate("/cards");
      });
  }

  return (
    <div>
      <h1>Se connecter</h1>
      <pre>{JSON.stringify(body, null, 2)}</pre>
      <form onSubmit={handleSubmitLogin} onChange={handleChangeInput}>
        <div>
          <label>Adresse email : </label>
          <input placeholder="Votre email" type="email" name="email"></input>
        </div>
        <div>
          <label>Mot de passe : </label>
          <input
            placeholder="Mot de passe"
            type="password"
            name="password"
          ></input>
        </div>

        <button>Se connecter</button>
      </form>
    </div>
  );
}

export default LoginPage;
