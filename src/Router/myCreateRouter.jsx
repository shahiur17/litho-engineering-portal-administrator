import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts.jsx";
import Home from "../pages/Home.jsx";
import SupervisorsPage from "../pages/SupervisorsPage.jsx";
import Login from "../pages/Login.jsx";
import Admin from "../pages/Admin.jsx";
import PrivateRoute from "../components/PrivateRoute.jsx";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/supervisors",
        element: <SupervisorsPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/admin",
        element: (
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default myCreateRouter;
