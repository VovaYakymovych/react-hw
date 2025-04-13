import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import DummyJsonComments from "../components/Comments/DummyJsonComments/DummyJsonComments.tsx";
import JsonPlaceholderComments from "../components/Comments/JsonPlaceholderComments/JsonPlaceholderComments.tsx";
import DummyJsonPosts from "../components/Posts/DummyJsonPosts/DummyJsonPosts.tsx";
import JsonPlaceholderPosts from "../components/Posts/JsonPlaceholderPosts/JsonPlaceholderPosts.tsx";
import DummyJsonUsers from "../components/Users/DummyJsonUsers/DummyJsonUsers.tsx";
import JsonPlaceholderUsers from "../components/Users/JsonPlaceholderUsers/JsonPlaceholderUsers.tsx";
import PostsLayout from "../layouts/PostsLayout.tsx";
import UsersLayout from "../layouts/UsersLayout.tsx";
import CommentsLayout from "../layouts/CommentsLayout.tsx";


export const routes = createBrowserRouter([
    {
        path:'/',element:<MainLayout/>,children:[
            {path:'users',element:<UsersLayout/>,children:[
                    {path:'jsonplaceholder',element:<JsonPlaceholderUsers/>},
                    {path:'dummyjson',element:<DummyJsonUsers/>}
                ]},
            {path:'posts',element:<PostsLayout/>,children:[
                    {path:'jsonplaceholder',element:<JsonPlaceholderPosts/>},
                    {path:'dummyjson',element:<DummyJsonPosts/>}
                ]},
            {path:'comments',element:<CommentsLayout/>,children:[
                    {path:'jsonplaceholder',element:<JsonPlaceholderComments/>},
                    {path:'dummyjson',element:<DummyJsonComments/>}
                ]}
        ]
    }
])