import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Card from "./Pages/Card/Card";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/edm-system" element={<Home />} />
        <Route path="/edm-system/user/:id" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
