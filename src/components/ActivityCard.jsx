import LeaderboardCard from "./LeaderboardCard.jsx";
import Feed from "./Feed.jsx";
import "./Homepage.css";
import React, { useState, useEffect } from "react";

const ActivityCard = ({props}) => {
  console.log('Test data in1:', props);
  console.log('Test data in2:', props);

  return (
    <div className="activities">
      <div className="activity-feed">
        <div className="card-leaderboard">
          <div className="card-header">
            <div className="card-title">{props.name}</div>
            <div className="profile">
              <div className="pic-border">
                <img src={props.profile_pic_url} className="profile-pic" />
              </div>
              <div className="card-user">{props.host}</div>
            </div>
          </div>

          <div className="card-rating">
            <p className="guests">
              {" "}
              <strong>Number of guests: </strong> {props.guests}
            </p>
            <p className="place">
              {" "}
              <strong> Place: </strong> {props.place}{" "}
            </p>
          </div>

          <div className="card-caption"> <strong> Time: </strong>  {props.time}</div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
