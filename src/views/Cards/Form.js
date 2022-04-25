function CreateDeck() {
  return (
    <div>
      <header>
        <h1>Créer son deck</h1>
      </header>
      <form action="" method="POST">
        <div>
          <input value={1}></input>
          <input placeholder="URL .jpg only"></input>
        </div>
        <div>
          <input value={2}></input>
          <input placeholder="URL .jpg only"></input>
        </div>
        <div>
          <input value={3}></input>
          <input placeholder="URL .jpg only"></input>
        </div>
        <div>
          <input value={4}></input>
          <input placeholder="URL .jpg only"></input>
        </div>
        <div>
          <input value={5}></input>
          <input placeholder="URL .jpg only"></input>
        </div>
        <div>
          <input value={6}></input>
          <input placeholder="URL .jpg only"></input>
        </div>
        <div>
          <input value={7}></input>
          <input placeholder="URL .jpg only"></input>
        </div>
        <button>Ajouter deck</button>
      </form>
    </div>
  );
}

export default CreateDeck;
