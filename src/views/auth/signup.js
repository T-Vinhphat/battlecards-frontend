import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [body, setBody] = useState({
    email: "",
    pseudo: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  function UpdateBody(key, value) {
    setBody({ ...body, [key]: value });
  }

  function HandleFormChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    UpdateBody(name, value);
  }

  async function HandleSubmitSignup(event) {
    event.preventDefault();
    const submit = await fetch("http://localhost:1337/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!submit.ok) {
      alert("l'inscription ne s'est pas passé comme prévu");
    } else {
      await navigate("/profil/:id");
    }
  }

  return (
    <div>
      <h1>Inscription</h1>
      <pre>{JSON.stringify(body, null, 2)}</pre>
      <form
        onChange={HandleFormChange}
        onSubmit={HandleSubmitSignup}
        style={{
          border: "solid 1px white",
          display: "grid",
          width: "400px",
          placeItems: "center",
        }}
      >
        <div>
          <label>adresse mail : </label>
          <input placeholder="adresse@mail.com" type="email" name="email" />
        </div>
        <div>
          <label>pseudo : </label>
          <input placeholder="pseudo" type="text" name="pseudo" />
        </div>
        <div>
          <label>mot de passe : </label>
          <input
            placeholder="password"
            type="password"
            name="password"
            minLength={5}
          />
        </div>
        <div>
          <label>confirmation : </label>
          <input
            placeholder="password"
            type="password"
            name="confirmPassword"
            minLength={5}
          />
        </div>

        <button>Creation</button>
      </form>
    </div>
  );
}

export default Signup;
