import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import router from "./routes";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
