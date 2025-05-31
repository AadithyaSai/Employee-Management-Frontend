import {
  EMPLOYEE_ACTION_TYPES,
  type EmployeeAction,
  type EmployeeState,
} from "./employee.types";

const initialEmployeeState: EmployeeState = [];

const employeeReducer = (
  state = initialEmployeeState,
  action: EmployeeAction
) => {
  switch (action.type) {
    case EMPLOYEE_ACTION_TYPES.ADD:
      return [
        ...state,
        { ...action.payload, id: Math.floor(Math.random() * 1000) },
      ];

    case EMPLOYEE_ACTION_TYPES.DELETE:
      return state.filter((employee) => employee.id !== action.payload);

    case EMPLOYEE_ACTION_TYPES.UPDATE:
      return state.map((employee) =>
        employee.id === action.payload.id ? action.payload : employee
      );

    default:
      return state;
  }
};

export default employeeReducer;
