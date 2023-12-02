import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import DashBoard from "../Layout/DashBoard";
import MyProfile from "../Pages/UserDashBoard/MyProfile/MyProfile";
import Appointments from "../Pages/UserDashBoard/Appointments/Appointments";
import TestResult from "../Pages/UserDashBoard/TestResult/TestResult";
import ErrorPage from "../ErrorPage/ErrorPage";
import AllUsers from "../Pages/AdminDashBoard/AllUsers/AllUsers";
import AddATest from "../Pages/AdminDashBoard/AddATest/AddATest";
import AllTest from "../Pages/AdminDashBoard/AllTest/AllTest";
import Reservation from "../Pages/AdminDashBoard/Reservation/Reservation";
import AddABanner from "../Pages/AdminDashBoard/AddABanner/AddABanner";
import AllBanners from "../Pages/AdminDashBoard/AllBanners/AllBanners";
import Login from "../AuthenticationPage/Login/Login";
import Register from "../AuthenticationPage/Register/Register";
import AllTests from "../Pages/AllTests/AllTests";
import OrderMedicines from "../Pages/OrderMedicines/OrderMedicines";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Services from "../Pages/Services/Services";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/login',
                element: <Login></Login>
            }, 
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/allTests',
                element: <AllTests></AllTests>
            },
            {
                path: '/details/:id',
                element: <DetailsPage></DetailsPage>
            },
            {
                path: '/orderMedicines',
                element: <OrderMedicines></OrderMedicines>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/services',
                element: <Services></Services>
            }
           
        ]
    },
    {
        path: 'dashBoard',
        element: <DashBoard></DashBoard>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: 'myProfile',
                element: <MyProfile></MyProfile>
            },
            {
                path: 'appointments',
                element: <Appointments></Appointments>
            },
            {
                path: 'testResult',
                element: <TestResult></TestResult>
            },
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'addATest',
                element: <AddATest></AddATest>
            },
            {
                path: 'allTest',
                element: <AllTest></AllTest>
            },
            {
                path: 'reservation',
                element: <Reservation></Reservation>
            },
            {
                path: 'addBanner',
                element: <AddABanner></AddABanner>
            },
            {
                path: 'allBanners',
                element: <AllBanners></AllBanners>
            },




        ]
    }
]);