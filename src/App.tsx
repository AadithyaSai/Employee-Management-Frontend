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
  return true;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: isLoggedIn() ? (
      <Navigate to="/employees" />
    ) : (
      <Navigate to="/login" />
    ),
  },
  {
    path: "/login",
    element: isLoggedIn() ? <Navigate to="/employees" /> : <Login />,
  },
  {
    path: "/employees",
    element: <MainLayout />,
    children: [
      { index: true, element: <EmployeeList /> },
      { path: "create", element: <CreateEmployee /> },
      { path: ":id", element: <EmployeeDetails /> },
      { path: "id/edit", element: <EditEmployee /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
