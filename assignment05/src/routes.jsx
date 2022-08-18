import {Component} from "react";
import {Route} from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Testimonials from "./Testimonials";

const routes = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "products",
        element: <Products/>
    },
    {
        path: "testimonials",
        element: <Testimonials/>
    }
]

export default routes;