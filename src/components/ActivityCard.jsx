import LeaderboardCard from "./LeaderboardCard.jsx";
import Feed from "./Feed.jsx";
import "./LeaderboardCard.css";
import React, { useState, useEffect } from "react";

const ActivityCard = ({ props }) => {
  console.log("Test data in1:", props);
  console.log("Test data in2:", props);

  return (

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

      <div className="card-info">
        <div className="place">
          {" "}
          <strong> Location: </strong> {props.place}
        </div>
        <div className="card-caption">
          {" "}
          <strong> Time: </strong> {props.time}
        </div>
        <div className="guests">
          {" "}
          <strong> Total Seats: </strong> {props.guests}
        </div>
      </div>

      <div className="card-caption">
        {" "}
        <strong> Contact: </strong> {props.contact}
      </div>
    </div>
  );
};

export default ActivityCard;
