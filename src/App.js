import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import { ResInfo } from "./components/RestuarantInfo";

const FoodApp = () => {
  return (
    <div className="food-app">
      <Header />
      <div className="heyy">
        <Outlet/>
      </div>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <FoodApp/>,
    children: [
      {
       path: '/',
       element: <Body/>
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/restuarant/:resId',
        element: <ResInfo/>
      }

    ],
    errorElement: <Error/>
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
