import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import LoginComponent from "../components/LoginConponent/LoginComponent.tsx";
import AuthRecipesComponent from "../components/AuthRecipesComponent/AuthRecipesComponent.tsx";
import Users from "../components/UsersComponent/Users.tsx";

export const routes = createBrowserRouter([
    {
        path:"/",element:<MainLayout/>,children:[
            {path:"login",element:<LoginComponent/>},
            {path:"auth/recipes",element:<AuthRecipesComponent/>},
            {path:"users",element:<Users/>}
        ]
    }
])