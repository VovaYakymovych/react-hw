import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import Users from "../components/Users/users.tsx";
import Comments from "../components/Comments/comments.tsx";
import Posts from "../components/Posts/posts.tsx";
import Products from "../components/Products/products.tsx";

export const routes = createBrowserRouter([
    {
        path:'/',element:<App/>,children:[
            {path:'users',element:<Users/>},
            {path:'comments',element:<Comments/>},
            {path:'posts',element:<Posts/>},
            {path:'products',element:<Products/>}
        ]
    }
])