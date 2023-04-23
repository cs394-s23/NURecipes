import PostCard from "./PostCard.jsx"
import Feed from "./Feed.jsx"
import "./Homepage.css"

import React, { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { pushDb } from "../utilities/firebase"
import InputGroup from "react-bootstrap/InputGroup"
import ToggleButton from 'react-bootstrap/ToggleButton';


const Homepage = ({data}) => {


    if (!data) {
        return <h1>Data is loading...</h1>;
    }
    console.log("data home", data.Recipes);
    
    // const desiredTags = [0, 0, 0, 0]

    const [veggie_, setVeggie_] = useState(false);
    const [vegan_, setVegan_] = useState(false);
    const [glutenFree_, setGlutenFree_] = useState(false);
    const [dairyFree_, setDairyFree_] = useState(false);

    const handleVeggie_ = (e) => {
        setVeggie_(!veggie_);
        // desiredTags[0]
    }

    const handleVegan_ = (e) => {
        setVegan_(!vegan_);
    }

    const handleGlutenFree_ = (e) => { 
        setGlutenFree_(!glutenFree_);
    }

    const handleDairyFree_ = (e) => {
        setDairyFree_(!dairyFree_);
    } 

    return (
        <div className="bigFeed"> 
            <div className="tagButtons">
                <ToggleButton className="tag-button" variant="outline-light" type="checkbox" checked={veggie_} onClick={() => handleVeggie_()}> Vegetarian </ToggleButton>
                <ToggleButton className="tag-button" variant="outline-light" type="checkbox" checked={vegan_} onClick={() => handleVegan_()}> Vegan </ToggleButton>
                <ToggleButton className="tag-button" variant="outline-light" type="checkbox" checked={glutenFree_} onClick={() => handleGlutenFree_()} > Gluten-Free </ToggleButton>
                <ToggleButton className="tag-button" variant="outline-light" type="checkbox" checked={dairyFree_} onClick={() => handleDairyFree_()}> Dairy-Free </ToggleButton>
            </div>
            <div className = "feed">
                < Feed data = {data.Recipes} desiredTags={[veggie_, vegan_, glutenFree_, dairyFree_]}  />
            </div>
        </div>
    )
}

export default Homepage;