import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Root";
import HomePage from "./pages/HomePage";
import Locked from "./pages/Locked";


const hide = false

const router = createBrowserRouter([
  {
    path: '/',
    element: hide ? <Locked /> : <Root />,
    errorElement: <h2>Page Not Found!!!</h2>,
    children: [
      {
        path: '/',
        element: <HomePage/>,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);