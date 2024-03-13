import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Card from "./Pages/Card/Card";

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Card />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
