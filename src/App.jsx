import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar.jsx";

import { useDbData } from "./utilities/firebase";

import { FaHeart } from "react-icons/fa";

import Homepage from "./components/Homepage.jsx";

const App = () => {
  const [data, error] = useDbData("/");

  return (
    <div>
      <NavBar />
      <Homepage data={data} />
    </div>
  );
};

export default App;
