import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Education from "./Pages/Education/Education";
import Experience from "./Pages/Experience/Experience";
import Home from "./Pages/Home/Home";
import Personal from "./Pages/Personal/Personal";
import { StoreContext } from "./Context/StoreContext";
import useLocalStorage from "./Context/useLocalStorage";
const App = () => {
  const [personalInfo, setpersonalInfo] = useState('');
  const [file, setFile] = useState()
  return (
    <div>
      <StoreContext.Provider value={{personalInfo,setpersonalInfo,file,setFile}}>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/personal"} element={<Personal />} />
          <Route path={"/experience"} element={<Experience />} />
          <Route path={"/education"} element={<Education />} />
        </Routes>
      </StoreContext.Provider>
    </div>
  );
};

export default App;
