import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/home";
import DefaultLayout from "./components/layouts/DefaultLayout";
import 'primeicons/primeicons.css';
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route key={'home'} path="" element={<Home />} />
          <Route key={'projects'} path="/projects" element={<Projects />} />
          <Route key={'about'} path="/about" element={<About />} />
          <Route key={'contact'} path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
