import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TeeTimeList from "./components/TeeTimeList";
import "./App.css";
import PlayerHoleForm from "./components/PlayerHoleForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tee-times" element={<TeeTimeList />} />
      </Routes>
    </Router>
  );
}

export default App;
