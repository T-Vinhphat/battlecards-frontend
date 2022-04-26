import { useState } from "react";

function LoginPage() {
  const [body, setBody] = useState({
    email: "",
    password: "",
  });

  function updateBody(key, value) {
    setBody({ ...body, [key]: value });
  }

  function handleChangeInput(e) {
    const { name, value } = e.target;
    updateBody(name, value);
  }

  async function HandleSubmitLogin(event) {
    event.preventDefault();
    fetch("http://localhost:1337/login", {
      method: "POST",
    });
  }

  return (
    <div>
      <h1>Se connecter</h1>
      <pre>{JSON.stringify(body, null, 2)}</pre>
      <form onSubmit={HandleSubmitLogin} onChange={handleChangeInput}>
        <input placeholder="Votre email" type="email" name="email"></input>
        <input
          placeholder="Mot de passe"
          type="password"
          name="password"
        ></input>
        <button>Se connecter</button>
      </form>
    </div>
  );
}

export default LoginPage;
