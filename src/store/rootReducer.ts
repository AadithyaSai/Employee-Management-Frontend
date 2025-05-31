import departmentReducer from "./department/departmentReducer";
import employeeReducer from "./employee/employeeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  employees: employeeReducer,
  departments: departmentReducer,
});

export default rootReducer;
