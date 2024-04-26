import React from "react";
import "./app.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import Insert from "./Insert";
import Display from "./Display";
import SingUp from "./SingUp";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="insert" element={<Insert />} />
            <Route path="display" element={<Display />} />
            <Route path="singup" element={<SingUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
