import { useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {

    const { registerUser } = useContext(AuthContext);

    const isStrongPassword = (password) => {

        const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

        return strongPassword.test(password);
    };

    const [districts, setDistricts] = useState([])
    const [upazilas, setUpazilas] = useState([])

    useEffect(() => {
        fetch('districts.json')
        .then(res => res.json())
        .then(data => setDistricts(data))
    })

    useEffect(() => {
        fetch('upazilas.json')
        .then(res => res.json())
        .then(data => setUpazilas(data))
    })

    console.log(upazilas)
    // console.log(districts[2])

    const handleRegisterBtn = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if (password !== confirmPassword){
            return toast.error('Password and confirmPassword does not match')
        }
        const values = { name, email, password, confirmPassword }
        console.log(values);


        if (!isStrongPassword(password)) {
            toast('Password must be at least 6 characters long and contain at least one uppercase letter, one special character, and one number');
            return;
        }

        registerUser(email, password)
            .then(res => toast('Congratulations! For Being A Member', res))
            .catch(err => toast('Try Again Please', err))


        fetch('https://b8a11-server-side-wdkammrul.vercel.app/apply', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(values),

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    form.reset();
                }
                console.log(data)
            })
    }

    return (
        <div>
            <div><br /><br /></div>
            <div>
                <form onSubmit={handleRegisterBtn} className="w-11/12 md:w-3/4 lg:w-1/2 mx-auto bg-slate-800 rounded-lg p-10 mt-10">
                    <div className="form-control">
                        <h2 className="text-4xl text-center my-6 uppercase font-extrabold">Register Here</h2>

                        <label className="label">
                            <span className="label-text text-xl font-extrabold"></span>
                        </label>
                        <input type="name" name="name" placeholder="Name" className="input rounded-full input-bordered" required />

                        <label className="label mt-3">
                            <span className="label-text text-xl font-extrabold"></span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input rounded-full input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label mt-3">
                            <span className="label-text text-xl font-extrabold"></span>
                        </label>
                        <input type="password" placeholder="Password" name="password" className="input rounded-full input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label mt-3">
                            <span className="label-text text-xl font-extrabold"></span>
                        </label>
                        <input type="password" placeholder="Confirm Password" name="confirmPassword" className="input rounded-full input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label mt-3">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <select name="category" className="select rounded-full checkbox-secondary input-bordered w-full border" defaultValue="">
                                <option value="" disabled>Blood Group</option>
                                <option value="remote">A+</option>
                                <option value="remote">A-</option>
                                <option value="remote">B+</option>
                                <option value="remote">B-</option>
                                <option value="remote">AB+</option>
                                <option value="remote">AB-</option>
                                <option value="remote">O+</option>
                                <option value="remote">O-</option>
                            </select>
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label mt-3">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <select name="category" className="select rounded-full checkbox-secondary input-bordered w-full border" defaultValue="">
                                <option value="" disabled>District</option>
                                {
                                    districts.map(dis => <option key={dis.id} value={dis.name}>{dis.name}</option>)
                                }
                                
                            </select>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label mt-3">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <select name="category" className="select rounded-full checkbox-secondary input-bordered w-full border" defaultValue="">
                                <option value="" disabled>Upazila</option>
                                {
                                    upazilas.map(upazila => <option key={upazila.id} value={upazila.name}>{upazila.name}</option>)
                                }
                                
                            </select>
                        </label>
                    </div>

                    {/* <div className="form-control">
                        <label className="label mt-3">
                            <span className="label-text text-xl font-extrabold"></span>
                        </label>
                        <input type="text" placeholder="District" name="district" className="input rounded-full input-bordered" />
                    </div> */}
                    {/* <div className="form-control">
                        <label className="label mt-3">
                            <span className="label-text text-xl font-extrabold"></span>
                        </label>
                        <input type="text" placeholder="Upazila" name="upazila" className="input rounded-full input-bordered" />
                    </div> */}
                    <div className="form-control">
                        <label className="label mt-3">
                            <span className="label-text text-xl font-extrabold"></span>
                        </label>
                        <input type="avatar" placeholder="Avatar" name="avatar" className="input rounded-full input-bordered" />
                    </div>
                    <div className="form-control mt-6 ">
                        <button className="btn bg-blue-600 rounded-full mt-3 mx-auto w-[220px] text-white btn-primary">Register</button>

                        <div className="flex my-8 ">
                            <p className="text-center mx-auto">Already Have an account ? <Link to='/login'> <span className=" font-extrabold text-2xl text-blue-600"> ➤ Log In </span> </Link></p>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;