import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Product from "../Pages/Product/Product";
// import GoogleProduct from "../Pages/GoogleProduct/GoogleProduct";

const myCreatedRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:3000/brands')
            },
            {
                path: '/addProduct',
                element: <PrivateRoute>
                    <AddProduct></AddProduct>
                </PrivateRoute>
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>
            },
            {
                path: '/products/:brand',
                element: <Product></Product>,
                loader: () => fetch('http://localhost:3000/googleProducts')
            },
            // {
            //     path: '/googleProduct',
            //     element: <GoogleProduct></GoogleProduct>,
            //     loader: () => fetch('http://localhost:3000/googleProducts')
            // },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);

export default myCreatedRouter;