import LeaderboardCard from "./LeaderboardCard.jsx"
import Feed from "./Feed.jsx"
import "./Homepage.css"
import React, { useState, useEffect } from "react"

const Discover = ({data}) => {

    console.log("unsorted data: ", data);
    
    if (!data) {
        return <h1>Data is loading...</h1>;
    }

    console.log("data recipes ", data.Recipes)

    const sortedData = data.Recipes.sort((a,b) => {
        return a.like_count > b.like_count ? -1 : 1
    })

    console.log("post-sort data: ", data);
    console.log("sorted data: ", sortedData);
    console.log("all activities: ", data.Activities)

    return (
        <div className = "feed">
            <div className = "leaderboard">
                <h1 style={{color:"white"}}> This week's leaders are: </h1>
            </div>
            <div className = 'activity-feed'>
                {sortedData.map((recipe, index) => <LeaderboardCard props={recipe} key={index} />)}
            </div>
        </div>
    )
}

export default Discover;