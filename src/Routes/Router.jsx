import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Recipes from "../Pages/Recipes/Recipes";
import RecipeInfo from "../Pages/RecipeInfo/RecipeInfo";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Route/PrivateRoute";

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
      element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
      children: [
        {
            path: ':id',
            element: <RecipeInfo></RecipeInfo>,
            loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
        }
      ]
    },
    {
        path: 'blog',
        element: <Blog></Blog>
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