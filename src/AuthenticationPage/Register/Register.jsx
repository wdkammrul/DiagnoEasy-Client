import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import useAxios from "../../hook/useAxios";
import { imageUpload } from "../../api/utils";

const Register = () => {


    const [districts, setDistricts] = useState([])
    const [upazilas, setUpazilas] = useState([])

    const { registerUser } = useContext(AuthContext);

    // const isStrongPassword = (password) => {

        // const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

    //     return strongPassword.test(password);
    // };



    useEffect(() => {
        fetch('districts.json')
            .then(res => res.json())
            .then(data => setDistricts(data))
    }, [])

    useEffect(() => {
        fetch('upazilas.json')
            .then(res => res.json())
            .then(data => setUpazilas(data))
    }, [])

    // console.log(upazilas)
    // console.log(districts)

    const axiosPublic = useAxios()
    const handleRegisterBtn = async event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const district = form.district.value;
        const upazila = form.upazila.value;
        const image = form.image.files[0]
        const imageData = await imageUpload(image)
        const singleImg = imageData?.data?.display_url
        const bloodGroup = form.bloodGroup.value;
        const confirmPassword = form.confirmPassword.value;
        const isActive = true 
        const isAdmin = false
        if (password !== confirmPassword) {
            return toast.error('Password and confirmPassword does not match')
        }

        const newUser = { name, email, password, confirmPassword, district, upazila, bloodGroup, singleImg, isActive, isAdmin}
        console.log(newUser);
        console.log(image)


        // if (!isStrongPassword(password)) {
        //     toast('Password must be at least 6 characters long and contain at least one uppercase letter, one special character, and one number');
        //     return;
        // }

        registerUser(email, password)
            .then(res => {
                toast('Congratulations! For Being A Member', res)
            })
            .catch(err => console.log(' Try Again Please', err))


        try {
            axiosPublic.post("/users", (newUser))
                .then(data => {
                    console.log(data);
                    // if (data.insertedId) {
                    // toast('Test Added Successfully')
                    //     form.reset();
                    // }
                });

            console.log(newUser)
        }
        catch (err) {
            console.log(err)
        }


        // fetch('https://diagno-easy-server.vercel.app/users', {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify(user),

        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             form.reset();
        //         }
        //         console.log(data)
        //     })

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
                            <select name="bloodGroup" className="select rounded-full checkbox-secondary input-bordered w-full border" defaultValue="">
                                <option value="" disabled>Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label mt-3">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <select name="district" className="select rounded-full checkbox-secondary input-bordered w-full border" defaultValue="">
                                <option value="district" disabled>District</option>
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
                            <select name="upazila" className="select rounded-full checkbox-secondary input-bordered w-full border" defaultValue="">
                                <option value="upazila" disabled>Upazila</option>
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
                        {/* <input type="avatar" placeholder="Avatar" name="avatar" className="input rounded-full input-bordered" /> */}
                        <input type="file" name="image" className="file-input file-input-bordered file-input-primary w-full rounded-full" />
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