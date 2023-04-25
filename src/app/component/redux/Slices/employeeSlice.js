import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    listEmployee: [],
  },
  reducers: {
    getAllEmployees: (state, action) => {
      console.log(action);
    },
  },
});

export const { getAllEmployees } = employeeSlice.actions;

export default employeeSlice.reducer;
