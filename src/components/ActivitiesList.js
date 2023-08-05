// src/components/ActivitiesList.js
import React from "react";
import { useSelector } from "react-redux";
import "../App.css";
import "./ActivitiesList.css";
import "./LogActivityForm.css";

function ActivitiesList() {
  const activities = useSelector((state) => state.activities);

  const sortedActivities = [...activities].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  });

  return (
    <ul>
      {sortedActivities.map((activity, i) => (
        <li key={i}>
          <h3>{activity.date}</h3> {/* Render date here */}
          <p>Task: {activity.task}</p>
          <p>Materials Used: {activity.materials}</p>
          <p>Weather Conditions: {activity.weather}</p>
          <p>Incidents/Safety Observations: {activity.incidents}</p>
        </li>
      ))}
    </ul>
  );
}

export default ActivitiesList;
