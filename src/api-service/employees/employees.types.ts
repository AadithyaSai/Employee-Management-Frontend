import type { Employee } from "../../store/employee/employee.types";

export type GetAllEmployeesResponse = Employee[];

export type GetOneEmployeeResponse = Employee;

export type GetOneEmployeePayload = number;

export type CreateEmployeeResponse = Employee;

export type CreateEmployeePayload = Employee;

export type UpdateEmployeeResponse = Employee;

export type UpdateEmployeePayload = Employee;

export type DeleteEmployeePayload = number;
