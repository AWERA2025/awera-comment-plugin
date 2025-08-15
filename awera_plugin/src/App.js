import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Plugin from "./plugin";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plugin" element={<Plugin />} />
    </Routes>
  );
}
