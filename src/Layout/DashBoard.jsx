import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthenticationPage/AuthProvider/AuthProvider";

const DashBoard = () => {

    const { user } = useContext(AuthContext)
    const userEmail = user?.email

    const [allProfile, setAllProfile] = useState([])
    useEffect(() => {
        fetch('https://diagno-easy-server.vercel.app/users')
            .then(res => res.json())
            .then(data => setAllProfile(data))
    }, [])

    const loggedInUser = allProfile?.filter(profile => profile.email === userEmail)
    const isAdmin = loggedInUser[0]?.isAdmin

    return (
        <div className="flex mt-10 gap-6">
            <div className="w-80 min-h-full bg-indigo-500 rounded-lg">
                <ul className="menu space-y-3">
                    <NavLink to='/' className='bg-blue-600-600 btn btn-secondary text-white'>Go Home</NavLink>



                    {isAdmin ?

                        <>
                            <h1 className="text-3xl font-extrabold p-2">Admin Dashboard</h1>
                            <li>
                                <NavLink to="/dashBoard/allUsers">All Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashBoard/addATest">Add A Test</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashBoard/allTest">All Test</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashBoard/reservation">Reservation</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashBoard/addBanner">Add Banner</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashBoard/allBanners">All Banners</NavLink>
                            </li>

                        </>

                        :
                        
                        <>
                            <h1 className="text-4xl font-extrabold p-2">User Dashboard</h1>
                            <li>
                                <NavLink to="/dashBoard/myProfile">My Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashBoard/appointments">Appointments</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashBoard/testResult">Test Result</NavLink>
                            </li>
                        </>
                    }
                </ul>
            </div>
            <div className="flex-1 rounded-lg">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;