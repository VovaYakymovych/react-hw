import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import CarsComponent from "../components/CarsComponent/CarsComponent.tsx";
import EditComponent from "../components/EditComponent/EditComponent.tsx";

export const routes = createBrowserRouter([{
    path:'/', element:<MainLayout/>, children:[
        {path:'cars', element:<CarsComponent/>},
        {path:'editcars', element:<EditComponent/>}
    ]
}])