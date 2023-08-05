// src/components/LogActivityForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logActivity } from "../redux/activitiesSlice";
import "../App.css";
import "./ActivitiesList.css";
import "./LogActivityForm.css";

const LogActivityForm = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [task, setTask] = useState("");
  const [materials, setMaterials] = useState("");
  const [weather, setWeather] = useState("");
  const [incidents, setIncidents] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      logActivity({
        date,
        task,
        materials,
        weather,
        incidents,
      })
    );

    // Clear form fields
    setDate(new Date().toISOString().substring(0, 10));
    setTask("");
    setMaterials("");
    setWeather("");
    setIncidents("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <label>
        Task:
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
      </label>
      <label>
        Materials Used:
        <input
          type="text"
          value={materials}
          onChange={(e) => setMaterials(e.target.value)}
          required
        />
      </label>
      <label>
        Weather Conditions:
        <input
          type="text"
          value={weather}
          onChange={(e) => setWeather(e.target.value)}
          required
        />
      </label>
      <label>
        Incidents/Safety Observations:
        <textarea
          value={incidents}
          onChange={(e) => setIncidents(e.target.value)}
          required
        />
      </label>
      <button type="submit">Log Activity</button>
    </form>
  );
};

export default LogActivityForm;
