import baseApi from "../api";
import {
  type CreateEmployeePayload,
  type CreateEmployeeResponse,
  type DeleteEmployeePayload,
  type GetAllEmployeesResponse,
  type GetOneEmployeePayload,
  type GetOneEmployeeResponse,
  type UpdateEmployeePayload,
  type UpdateEmployeeResponse,
} from "./employees.types";

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    listEmployee: builder.query<GetAllEmployeesResponse, void>({
      query: () => ({
        url: "/employees",
      }),
      providesTags: ["ALL_EMPLOYEES"],
    }),

    getOneEmployee: builder.query<
      GetOneEmployeeResponse,
      GetOneEmployeePayload
    >({
      query: (payload) => ({
        url: `/employees/${payload}`,
      }),

      providesTags: (_result, _error, id) => {
        return [{ type: "EMPLOYEE_DETAILS", id }];
      },
    }),

    createEmployee: builder.mutation<
      CreateEmployeeResponse,
      CreateEmployeePayload
    >({
      query: (payload) => {
        return {
          url: "/employees",
          method: "POST",
          body: payload,
        };
      },

      invalidatesTags: ["ALL_EMPLOYEES"],
    }),

    updateEmployee: builder.mutation<
      UpdateEmployeeResponse,
      UpdateEmployeePayload
    >({
      query: (payload) => ({
        url: `/employees/${payload.id}`,
        method: "PUT",
        body: payload,
      }),

      invalidatesTags: (result) => {
        return ["ALL_EMPLOYEES", { type: "EMPLOYEE_DETAILS", id: result!.id }];
      },
    }),

    deleteEmployee: builder.mutation<void, DeleteEmployeePayload>({
      query: (payload) => ({
        url: `/employees/${payload}`,
        method: "DELETE",
      }),

      invalidatesTags: (_result, _error, id) => {
        return ["ALL_EMPLOYEES", { type: "EMPLOYEE_DETAILS", id }];
      },
    }),
  }),
});

export const {
  useListEmployeeQuery,
  useGetOneEmployeeQuery,
  useCreateEmployeeMutation,
  useDeleteEmployeeMutation,
  useUpdateEmployeeMutation,
} = employeeApi;
