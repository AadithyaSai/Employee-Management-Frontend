import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Department, type DepartmentState } from "./department.types";

const initialState: DepartmentState = [
  {
    id: 1,
    name: "MARKETTING",
  },
  {
    id: 2,
    name: "SALES",
  },
  {
    id: 3,
    name: "PRODUCT",
  },
  {
    id: 4,
    name: "SECURITY",
  },
];

const departmentSlice = createSlice({
  name: "departments",
  initialState,
  reducers: {
    addDepartment: (state, action: PayloadAction<Department>) => {
      state.push(action.payload);
    },
    updateDepartment: (state, action: PayloadAction<Department>) => {
      return state.map((dept) =>
        dept.id === action.payload.id ? action.payload : dept
      );
    },
    deleteDepartment: (state, action: PayloadAction<number>) => {
      return state.filter((dept) => dept.id !== action.payload);
    },
  },
});

export const { addDepartment, updateDepartment, deleteDepartment } =
  departmentSlice.actions;
export default departmentSlice.reducer;
