import LeaderboardCard from "./LeaderboardCard.jsx"
import Feed from "./Feed.jsx"
import "./Homepage.css"
import React, { useState, useEffect } from "react"
import ActivityCard from "./ActivityCard.jsx"

const Discover = ({data}) => {

    console.log("unsorted data: ", data);
    
    if (!data) {
        return <h1>Data is loading...</h1>;
    }

    console.log("data recipes ", data.Recipes)


    var recipeData = Object.values(data.Recipes);
    var activitiesData = Object.values(data.Activities);

    const sortedData = recipeData.sort((a,b) => {
        return a.like_count > b.like_count ? -1 : 1
    })

    const filteredData = sortedData.filter(post => post.date_posted > new Date().getTime() - 604800000)


    console.log(filteredData)
    // console.log("post-sort data: ", data);
    // console.log("sorted data: ", sortedData);
    // console.log("all activities: ", data.Activities)

    return (
        <div className = "feed">
            <div className = "leaderboard">
                <h1 style={{color:"white"}}> This week's leaders are: </h1>
            </div>
            <div className = 'activity-feed'>
                {filteredData.map((recipe, index) => <LeaderboardCard props={recipe} key={index} />)}
            </div>

            <div className = "activityboard">
                <h1 style={{color:"white"}}> This week's activities are: </h1>
            </div>
            <div className = 'activity-feed'>
                {activitiesData.map((activity, index) => <ActivityCard props={activity} key={index} />)}
            </div>
        </div>
    )
}

export default Discover;