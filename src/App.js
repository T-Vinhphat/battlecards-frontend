import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Profil from "./views/Profil/profil";
import DisplayPage from "./views/Cards/Display";
import Collection from "./views/Collection/Display";
import Signup from "./views/auth/signup";
import CreateDeck from "./views/Collection/CreateDeck";
import Accueil from "./views/Accueil/Display";
import LoginPage from "./views/auth/Login";
import { Navbar } from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/profil/:id" element={<Profil />} />
            <Route path="/profil/:id/collection" element={<Collection />} />
            <Route path="/cards" element={<DisplayPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/create" element={<CreateDeck />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profil/:id/CreateDeck" element={<CreateDeck />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}
// src="https://static.hitek.fr/img/actualite/ill_m/677768601/2438690.jpeg"
export default App;
