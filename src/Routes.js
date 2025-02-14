import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/Home";
import Signin from './components/Signin'
import Attraction from "./components/Attraction";
import Vacation from "./components/Vacation";
import Holiday from "./components/Holiday";
import Stays from "./components/Stays";
import Logout from "./components/Logout";
import register from "./components/register";
import Chart from "./components/Chart";


const Routes = () => {
  const router = (createBrowserRouter([
    {
      path: "/",
      element: <Signin/>,
    },
    {
      path: "/home",
      element: <Home/>,
    },
    {
      path: "/attractions",
      element: <Attraction/>,
    },
    {
      path: "/vacation",
      element: <Vacation/>,
    },
    {
      path: "/holiday",
      element: <Holiday/>,
    },
    {
      path: "/stays",
      element: <Stays/>,
    },
    {
      path: "/logout",
      element: <Logout/>,
    },
    {
      path: "/register",
      element: <register/>,
    },
    {
      path: "/chart",
      element: <Chart/>,
    },
  ]));

  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
};

export default Routes;
