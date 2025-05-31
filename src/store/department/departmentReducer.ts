import {
  DEPARTMENT_ACTION_TYPES,
  type DepartmentAction,
  type DepartmentState,
} from "./department.types";

const initialDepartmentState: DepartmentState = [
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

const departmentReducer = (
  state = initialDepartmentState,
  action: DepartmentAction
) => {
  switch (action.type) {
    case DEPARTMENT_ACTION_TYPES.ADD:
      return [...state, action.payload];
    case DEPARTMENT_ACTION_TYPES.DELETE:
      return state.filter((dept) => dept.id !== action.payload);
    case DEPARTMENT_ACTION_TYPES.UPDATE:
      return state.map((dept) =>
        dept.id === action.payload.id ? action.payload : dept
      );
    default:
      return state;
  }
};

export default departmentReducer;
