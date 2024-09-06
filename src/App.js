import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import Signup from "./components/SignUp";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Signup from "./components/SignUp";
   
const AppLayout = () => {
    return(
        <Provider store={appStore}>
        <div className = "app">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/signup",
                element: <Signup/>
            }
        ],
        errorElement: <ErrorPage/>
    },
    {
        path: "/about",
        element: <About/>,
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/contact",
        element: <Contact/>,
    }
]);
            

const root = ReactDOM.createRoot( document.getElementById('root'));

root.render(<RouterProvider router= {appRouter}/>);

