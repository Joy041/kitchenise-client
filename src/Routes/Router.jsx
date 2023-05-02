import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Recipes from "../Pages/Recipes/Recipes";
import RecipeInfo from "../Pages/RecipeInfo/RecipeInfo";

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
      element: <Recipes></Recipes>,
      children: [
        {
            path: ':id',
            element: <RecipeInfo></RecipeInfo>,
            loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
        }
      ]
    }
])

export default router;