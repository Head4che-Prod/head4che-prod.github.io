import React from "react";
import ReactDOM from "react-dom/client";
import NotYetImplemented from "./NotYetImplemented/NotYetImplemented";
import InexistantPage from "./404/404";
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
