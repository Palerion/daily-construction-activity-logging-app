// src/redux/activitiesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const activitiesSlice = createSlice({
  name: "activities",
  initialState: [],
  reducers: {
    logActivity(state, action) {
      const { date, task, materials, weather, incidents } = action.payload;
      state.push({ date, task, materials, weather, incidents });
    },
  },
});

export const { logActivity } = activitiesSlice.actions;
export default activitiesSlice.reducer;
