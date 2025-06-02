import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Employee, type EmployeeState } from "./employee.types";

const initialState: EmployeeState = [];

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.push(action.payload);
    },
    updateEmployee: (state, action: PayloadAction<Employee>) => {
      return state.map((employee) =>
        employee.id === action.payload.id ? action.payload : employee
      );
    },
    deleteEmployee: (state, action: PayloadAction<number>) => {
      return state.filter((employee) => employee.id !== action.payload);
    },
  },
});

export const { addEmployee, updateEmployee, deleteEmployee } =
  employeeSlice.actions;
export default employeeSlice.reducer;
