import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import DashBoard from "../Layout/DashBoard";
import MyProfile from "../Pages/UserDashBoard/MyProfile/MyProfile";
import Appointments from "../Pages/UserDashBoard/Appointments/Appointments";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
                
            }
        ]
    },
    {
        path: 'dashBoard',
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: 'myProfile',
                element: <MyProfile></MyProfile>
            },
            {
                path: 'appointments',
                element: <Appointments></Appointments>
            }
        ]
    }
]);