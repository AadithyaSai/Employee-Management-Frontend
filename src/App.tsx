import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
// import UncontrolledLogin from "./pages/login/UncontrolledLogin";
import { MainLayout } from "./components";
import {
  CreateEmployee,
  EditEmployee,
  EmployeeDetails,
  EmployeeList,
  NotFound,
} from "./pages";

const isLoggedIn = () => {
  const token = localStorage.getItem("isLoggedIn");
  console.log("token check", token, token === "true");
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

function App() {
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
  return <RouterProvider router={router} />;
}

export default App;
