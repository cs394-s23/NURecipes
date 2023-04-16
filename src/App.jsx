import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar.jsx";

import { useDbData } from "./utilities/firebase";

import { FaHeart } from "react-icons/fa";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import Discover from "./components/Discover";
import Create from "./components/Create.jsx";


const App = () => {
  const [data, error] = useDbData("/");

  return (
    <div className = "app-container">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {
            <div>
              <Homepage data={data} />
            </div>}
            />
            <Route  path = "/discover/" element = {
             <div>
              <Discover data={data} />
             </div>
            }/>
            <Route path = "/create/" element = {
              <div>
                <Create/>
              </div>
            }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
