import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import FavCountry from "./component/FavCountry";
import { Provider } from "react-redux";
import store from "./store/store";
import Error from "./utils/Error";
import Temperature from "./component/temp";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Temperature />,
  },
  {
    path: "favourite",
    element: <FavCountry />,
  },
  {
    path: "error",
    element: <Error />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}>
        <Temperature />;
      </RouterProvider>
    </Provider>
  );
}

export default App;
