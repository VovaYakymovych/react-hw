import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";

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