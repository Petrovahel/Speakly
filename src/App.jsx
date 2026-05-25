import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;
