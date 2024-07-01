import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Error } from "./components/Error";
import { ResInfo } from "./components/RestuarantInfo";
import { About } from "./components/About";

const Contact = lazy(() => import('./components/Contact'));

const FoodApp = () => {
  return (
    <div className="food-app">
      <Header />
      <div className="pt-5">
        <Outlet />
      </div>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <FoodApp />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact />
          </Suspense>
        )
      },
      {
        path: "/restaurant/:resId",
        element: <ResInfo/>
      }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
