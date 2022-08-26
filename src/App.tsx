import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import About from "./pages/about";
import Blog from "./pages/blog";
import Home from "./pages/home";
import Alumni from "./pages/alumni";


function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/alumni" element={<Alumni />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
