import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import { createBrowserRouter, Outlet, RouterProvider,  } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/restarauntMenu/RestaurantMenu";

const AppLayout = () => {
    return (
    <div className="app">
        <Header />
        <Outlet />
    </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
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
                element: <Contact />
            },
            {
                path: "/restaurants/:id",
                element: <RestaurantMenu />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);