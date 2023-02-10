import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";

const Resume = () => {
  const { store} = useContext(StoreContext);

  return <div>Resume</div>;
};

export default Resume;
