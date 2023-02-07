import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Education from "./Pages/Education/Education";
import Experience from "./Pages/Experience/Experience";
import Home from "./Pages/Home/Home";
import Personal from "./Pages/Personal/Personal";
import StoreContextProvider from "./Context/StoreContext";
const App = () => {
  return (
    <div>
      <StoreContextProvider>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/personal"} element={<Personal />} />
          <Route path={"/experience"} element={<Experience />} />
          <Route path={"/education"} element={<Education />} />
        </Routes>
      </StoreContextProvider>
    </div>
  );
};

export default App;
