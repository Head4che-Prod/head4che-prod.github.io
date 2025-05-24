import React from "react";
import ReactDOM from "react-dom/client";
import InexistantPage from "./InexistantPage/InexistantPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import HeadachePage from "./HeadachePage/HeadachePage";
import ProjectPage from "./TheProject/ProjectPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeadachePage />} />
        <Route path="/subway-out/" element={<HomePage />} />
        <Route path="/subway-out/the-project/" element={<ProjectPage />} />
        <Route path="*" element={<InexistantPage />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
