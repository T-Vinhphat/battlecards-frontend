import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Profil from "./views/Profil/profil";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/profil/:id" element={<Profil />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
