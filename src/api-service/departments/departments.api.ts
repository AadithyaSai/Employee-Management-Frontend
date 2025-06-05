import baseApi from "../api";
import type { GetAllDepartmentsResponse } from "./departments.types";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    listDepartment: builder.query<GetAllDepartmentsResponse, void>({
      query: () => ({
        url: "/departments",
      }),
      providesTags: ["ALL_DEPARTMENTS"],
    }),
  }),
});

export const { useListDepartmentQuery } = departmentApi;
