import React, { createContext, lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Error } from "./components/Error";
import { ResInfo } from "./components/RestuarantInfo";
import { About } from "./components/About";
import { Provider } from "react-redux";
import appStore from "../utils/app-store";
import { Cart } from "./components/cart";

const Contact = lazy(() => import('./components/Contact'));

export const LoggedInContext = createContext(null) 

const FoodApp = () => {
  const [cartCount, setCartCount] = useState(0)
  return (
    <Provider store={appStore}>
    <div className="food-app">
       <LoggedInContext.Provider value={{cartCount,setCartCount}}>
      <Header />
      <div className="pt-5">
        <Outlet />
      </div>
      </LoggedInContext.Provider>
    </div>
    </Provider>
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
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
