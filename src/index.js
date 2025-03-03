import React from "react";
import ReactDOM from "react-dom/client";
import InexistantPage from "./InexistantPage/InexistantPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<InexistantPage />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
