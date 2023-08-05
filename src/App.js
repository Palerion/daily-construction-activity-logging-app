// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import LogActivityForm from "./components/LogActivityForm.js";
import ActivitiesList from "./components/ActivitiesList.js";
import "./App.css";
import "./components/ActivitiesList.css";
import "./components/LogActivityForm.css";
import "./AppNavigation.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <nav className="app-navigation">
          {" "}
          <Link to="/">
            <button>Log Activity</button>
          </Link>{" "}
          <Link to="/activities">
            <button>Activities</button>
          </Link>
        </nav>
        <Routes>
          <Route path="/activities" element={<ActivitiesList />} />
          <Route path="/" element={<LogActivityForm />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
