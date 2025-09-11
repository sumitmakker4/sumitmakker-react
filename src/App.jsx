import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/home";
import DefaultLayout from "./components/layouts/DefaultLayout";
import 'primeicons/primeicons.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route key={'home'} path="" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
