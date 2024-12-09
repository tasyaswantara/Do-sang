import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";


const App = () => (
  <Router>
    <Header />
    <main className="container mx-auto">
      <div className="font-sans">
        <Home/>
      </div>
    </main>
    <Footer />
  </Router>
);

export default App;
