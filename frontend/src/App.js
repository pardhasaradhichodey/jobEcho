import "./App.css";
import HomePage from "./pages/home/home.js";
import About from "./pages/about/about";
import WhatWeDo from "./pages/whatWeDo/whatWeDo";
import Demo from "./pages/demo/demo";
import Contact from "./pages/contact/contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/whatWeDo" element={<WhatWeDo />}></Route>
        <Route exact path="/demo" element={<Demo/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
