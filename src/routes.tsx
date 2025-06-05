import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { AccessControlledRoute, MainLayout } from "./components";
import { Login, NotFound } from "./pages";

const CreateEmployee = lazy(
  () => import("./pages/createEmployee/createEmployee")
);
const Profile = lazy(() => import("./pages/profile/profile"));
const EditEmployee = lazy(() => import("./pages/editEmployee/editEmployee"));
const EmployeeDetails = lazy(
  () => import("./pages/employeeDetails/employeeDetails")
);
const EmployeeList = lazy(() => import("./pages/employeeList/employeeList"));

const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  return token !== null && token !== "";
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AccessControlledRoute
        check={isLoggedIn}
        trueComponent={<Navigate to="/employees" />}
        falseComponent={<Navigate to="/login" />}
      />
    ),
  },
  {
    path: "/login",
    element: (
      <AccessControlledRoute
        check={isLoggedIn}
        trueComponent={<Navigate to="/employees" />}
        falseComponent={<Login />}
      />
    ),
  },
  {
    path: "/employees",
    element: (
      <AccessControlledRoute
        check={isLoggedIn}
        trueComponent={<MainLayout />}
        falseComponent={<Navigate to="/login" />}
      />
    ),
    children: [
      { index: true, element: <EmployeeList />, errorElement: <NotFound /> },
      {
        path: "create",
        element: <CreateEmployee />,
        errorElement: <NotFound />,
      },
      { path: "profile", element: <Profile />, errorElement: <NotFound /> },
      { path: ":id", element: <EmployeeDetails />, errorElement: <NotFound /> },
      {
        path: ":id/edit",
        element: <EditEmployee />,
        errorElement: <NotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
