import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Profil from "./views/Profil/profil";
import DisplayPage from "./views/Cards/Display";
import CreateDeck from "./views/Cards/Form";
import LoginPage from "./views/Login/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/profil/:id" element={<Profil />} />
            <Route path="/cards" element={<DisplayPage />} />
            <Route path="/create" element={<CreateDeck />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}
// src="https://static.hitek.fr/img/actualite/ill_m/677768601/2438690.jpeg"
export default App;
