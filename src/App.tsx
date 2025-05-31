import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/login/login";
import { MainLayout } from "./components";
import { NotFound } from "./pages";
import { lazy } from "react";
import { Provider } from "react-redux";
import store from "./store/store";

const CreateEmployee = lazy(
  () => import("./pages/createEmployee/createEmployee")
);
const EditEmployee = lazy(() => import("./pages/editEmployee/editEmployee"));
const EmployeeDetails = lazy(
  () => import("./pages/employeeDetails/employeeDetails")
);
const EmployeeList = lazy(() => import("./pages/employeeList/employeeList"));

const isLoggedIn = () => {
  const token = localStorage.getItem("isLoggedIn");
  return token === "true";
};

const AccessControlledRoute = ({
  check,
  trueComponent,
  falseComponent,
}: {
  check: () => boolean;
  trueComponent: React.ReactNode;
  falseComponent: React.ReactNode;
}) => {
  return <>{check() ? trueComponent : falseComponent}</>;
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
      { index: true, element: <EmployeeList /> },
      { path: "create", element: <CreateEmployee /> },
      { path: ":id", element: <EmployeeDetails /> },
      { path: ":id/edit", element: <EditEmployee /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
