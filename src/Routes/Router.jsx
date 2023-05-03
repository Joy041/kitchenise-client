import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import RecipeInfo from "../Pages/RecipeInfo/RecipeInfo";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Route/PrivateRoute";
import React, { Suspense } from 'react';
import { Spinner } from "react-bootstrap";

const Recipes = React.lazy(() => import("../Pages/Recipes/Recipes"));
const Blog = React.lazy(() => import("../Pages/Blog/Blog"));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/chef')
            }
        ]
    },
    {
        path: 'recipes',
        element: <PrivateRoute><Suspense fallback={<p className="text-center mt-5">
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" className="me-3" /></p>}>
            <Recipes></Recipes></Suspense></PrivateRoute>,
        children: [
            {
                path: ':id',
                element: <RecipeInfo></RecipeInfo>,
                loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
            }
        ]
    },
    {
        path: 'blog',
        element: <Suspense fallback={<p className="text-center mt-5">
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" className="me-3" /></p>}><Blog></Blog></Suspense>
    },
    {

        path: 'login',
        element: <Login></Login>

    },
    {
        path: 'register',
        element: <Register></Register>
    }
])

export default router;