// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import activitiesReducer from "./activitiesSlice";

export const store = configureStore({
  reducer: {
    activities: activitiesReducer,
  },
});
