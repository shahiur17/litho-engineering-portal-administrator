import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts.jsx";
import Home from "../pages/Home.jsx";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ]
  }
]);

export default myCreateRouter;