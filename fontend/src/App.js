import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import AddService from "./compnents/AddService/AddService";
import HomePage from "./compnents/HomePage/HomePage";
import Navigation from "./compnents/Navigation/Navigation";
import UpdateService from "./compnents/UpdateService/UpdateService";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addService" element={<AddService />} />
        <Route path="/updateservice/:serviceId" element={<UpdateService />} />
      </Routes>
    </div>
  );
};

export default App;
