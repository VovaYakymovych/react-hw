import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import Users from "../components/Users/users.tsx";
import Comments from "../components/Comments/comments.tsx";
import Posts from "../components/Posts/posts.tsx";
import Products from "../components/Products/products.tsx";
import Jsonplaceholder from "../components/JsonPlaceholder/jsonplaceholder.tsx";
import Dummyjson from "../components/DummyJson/dummyjson.tsx";

export const routes = createBrowserRouter([
    {
        path:'/',element:<App/>,children:[
            {path:'users',element:<Users/>,children:[
                    {path:'jsonplaceholder',element:<Jsonplaceholder/>},
                    {path:'dummyjson',element:<Dummyjson/>}
                ]},
            {path:'comments',element:<Comments/>,children:[
                    {path:'jsonplaceholder',element:<Jsonplaceholder/>}
                ]},
            {path:'posts',element:<Posts/>,children:[
                    {path:'jsonplaceholder',element:<Jsonplaceholder/>},
                    {path:'dummyjson',element:<Dummyjson/>}]},
            {path:'products',element:<Products/>}
        ]
    }
])