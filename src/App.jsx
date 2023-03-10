import "./App.css";
import Footer from "./assets/footer";
import Navbar from "./assets/navbar";
import Homepage from "./assets/homepage";
import PlaceTostay from "./assets/placeTostay";
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/pts" element={<PlaceTostay />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
