import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Login = () => {

    const { signInUser } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password)

        const loginData = { email, password }
        console.log(loginData)

        signInUser(email, password)
            .then(res => {
                toast('Log In Successful', res)
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => toast('Invalid Email or Password', err))

    }

    return (
       <div>
        <div><br /><br /></div>
            <div className="mt-10">
                <form onSubmit={handleLogin} className="w-11/12 md:w-3/4 lg:w-1/2 mx-auto bg-slate-800 rounded-lg p-10">
                    <div className="form-control">
                        <h2 className="text-4xl text-center my-6 uppercase font-extrabold">Log in</h2>

                        {/* <button onClick={signInUsingPopup} className="mb-10 mt-6 m-auto btn bg-blue-600 btn-primary text-white uppercase">Log in with Google </button> */}


                        <hr /><h1 className="my-3 text-3xl font-extralight text-center">OR</h1><hr />


                        <label className="label mt-8">
                            <span className="label-text text-xl font-extrabold"></span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered rounded-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label mt-5">
                            <span className="label-text text-xl font-extrabold"></span>
                        </label>
                        <input type="password" placeholder="Password" name="password" className="input rounded-full input-bordered" required />
                    </div>
                    <div className="form-control mt-10 ">
                        <button className="btn rounded-full bg-blue-600 mx-auto w-[220px] text-white btn-primary">Log In</button>

                        <div className="flex my-8 ">
                            <p className="text-center mx-auto">New here ? Please <Link to='/register'> <span className=" font-extrabold text-blue-500 text-2xl "> ➤ Register </span></Link></p>

                        </div>
                    </div>
                </form>
            </div>
       </div>
    );
};

export default Login;