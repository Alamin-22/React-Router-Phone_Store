import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home";
import Favorite from "../Pages/Favorite/Favorite";
import Login from "../Pages/Login";
import Error from "../Pages/Error";
import Phone from "../Pages/Phone/Phone";

const MyCreateRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: ()=> fetch("/phones.json"),
            },
            {
                path:"/favorite",
                element:<Favorite></Favorite>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/phones/:id",
                element:<Phone></Phone>,
                loader: ()=>fetch("/phones.json"),
            },
        ]
    },
]);

export default MyCreateRoute;