import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="flex mt-10 gap-6">
            <div className="w-60 min-h-full bg-indigo-500 ">
                <ul className="menu space-y-4">
                    <li>
                        <NavLink to="/dashBoard/myProfile">My Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashBoard/appointments">Appointments</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;