import { Link } from "react-router-dom";

const Navbar = () => {

    // const navBar =
    //     <>
    //         <li > <a>Item 1</a></li>
    //         <li tabIndex={0}>
    //             <details>
    //                 <summary>Parent</summary>
    //                 <ul className="p-2">
    //                     <li><a>Submenu 1</a></li>
    //                     <li><a>Submenu 2</a></li>
    //                 </ul>
    //             </details>
    //         </li>
    //     </>

    const navBar = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        {/* {
            // user ? 'true': 'false'
            // user ? condition ? 'double true' : 'one true' : 'false' 
        }
        {
            user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard</Link></li>
        } */}
        <li>
            <Link to="/dashboard/myProfile">
                <button className="btn">
                    DashBoard
                    {/* <FaShoppingCart className="mr-2"></FaShoppingCart> */}
                    {/* <div className="badge badge-secondary">+{cart.length}</div> */}
                </button>
            </Link>
        </li>
       
    </>

    return (
        <>
            <div className="navbar fixed bg-opacity-30 z-10 bg-base-100 max-w-screen-lg  text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navBar}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">DiagnoEasy</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navBar}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;