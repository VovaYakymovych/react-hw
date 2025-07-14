import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout.tsx";
import Users from "../components/Users/users/Users.tsx";
import UserDetail from "../components/UserDetail/UserDetail.tsx";
import Comments from "../components/Comments/comments/Comments.tsx";
import Posts from "../components/Posts/posts/Posts.tsx";

export const router = createBrowserRouter([
    {
        path: "/",element: <MainLayout/>,children:[
            {path:"users",element:<Users/>},
            {path:"users/:id",element:<UserDetail/>},
            {path:"comments",element:<Comments/>},
            {path:"posts",element:<Posts/>},
        ]
    }
])