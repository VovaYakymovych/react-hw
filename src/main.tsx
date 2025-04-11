
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Users from "./components/Users/users.tsx";
import Posts from "./components/Posts/posts.tsx";
import Comments from "./components/Comments/comments.tsx";
import Products from "./components/Products/products.tsx";
import App from "./App.tsx";


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<App/>}>
                <Route path={'users'} element={<Users/>}/>
                <Route path={'posts'} element={<Posts/>}/>
                <Route path={'comments'} element={<Comments/>}/>
                <Route path={'products'} element={<Products/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)
