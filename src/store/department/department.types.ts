export interface Department {
  id: number;
  name: string;
}

export const DEPARTMENT_ACTION_TYPES = {
  ADD: "department/ADD",
  DELETE: "department/DELETE",
  UPDATE: "department/UPDATE",
} as const;

export type DepartmentActionTypes =
  (typeof DEPARTMENT_ACTION_TYPES)[keyof typeof DEPARTMENT_ACTION_TYPES];

export type DepartmentState = Department[];

export interface AddDepartmentAction {
  type: typeof DEPARTMENT_ACTION_TYPES.ADD;
  payload: Department;
}

export interface UpdateDepartmentAction {
  type: typeof DEPARTMENT_ACTION_TYPES.UPDATE;
  payload: Department;
}

export interface DeleteDepartmentAction {
  type: typeof DEPARTMENT_ACTION_TYPES.DELETE;
  payload: number;
}

export type DepartmentAction =
  | AddDepartmentAction
  | DeleteDepartmentAction
  | UpdateDepartmentAction;
