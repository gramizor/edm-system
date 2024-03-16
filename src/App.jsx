import React from "react";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
// import Card from "./Pages/Card/Card";
import Card2 from "./Pages/CustomCard/Card2";

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Card2 />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
