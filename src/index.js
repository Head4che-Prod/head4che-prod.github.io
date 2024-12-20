import React from "react";
import ReactDOM from "react-dom/client";
import NotYetImplemented from "./NotYetImplemented/NotYetImplemented";
import InexistantPage from "./InexistantPage/InexistantPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotYetImplemented />} />
        <Route path="*" element={<InexistantPage />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
