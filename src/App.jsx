import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useDbData } from './utilities/firebase';

import {FaHeart} from "react-icons/fa";


import Homepage from './components/Homepage.jsx'

const App = () => {
  const [data, error] = useDbData('/')

  return (
    <Homepage data={data}/>
  )
}

export default App
