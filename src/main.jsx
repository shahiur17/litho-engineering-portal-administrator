import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import myCreateRouter from "./Router/myCreateRouter.jsx";
import "./index.css";
import AuthProvider from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>   
      <RouterProvider router={myCreateRouter} />
    </AuthProvider>
  </React.StrictMode>
);
