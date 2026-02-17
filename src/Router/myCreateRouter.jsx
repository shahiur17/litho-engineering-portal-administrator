import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts.jsx";
import Home from "../pages/Home.jsx";
import SupervisorsPage from "../pages/SupervisorsPage.jsx";

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
    ]
  }
]);

export default myCreateRouter;