import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const AllUsers = () => {

    const [allUsers, setAllUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setAllUsers(data))
    }, [])

    return (
        <div className="bg-slate-700 p-6 ">
            <SectionTitle
                heading={'All Users'}
            >
            </SectionTitle>

            <div className="overflow-x-auto p-4">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Blood</th>
                            <th>District</th>
                            <th>Upazila</th>   
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                            allUsers.map(user => <tr key={user._id}>
                                <th><div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user?.singleImg} />
                                    </div>
                                </div></th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.bloodGroup}</td>
                                <td>{user?.district}</td>
                                <td>{user?.upazila}</td>
                                <td>
                                    <button className="btn bg-blue-600" onClick={() => document.getElementById('my_modal_2').showModal()}>Details</button>
                                    <dialog id="my_modal_2" className="modal">
                                        <div className="modal-box space-y-4">
                                            <h3 className="font-bold text-lg">Name: </h3>
                                            <h3 className="font-bold text-lg">Email: </h3>
                                            <h3 className="font-bold text-lg">Blood: </h3>
                                            <h3 className="font-bold text-lg">Address: </h3>
                                            <div className="form-control">
                                                <label className="input-group">
                                                    <select name="role" className="select rounded-lg checkbox-secondary input-bordered w-full border" defaultValue="">
                                                        <option value="" disabled>Role</option>
                                                        <option value="remote">True</option>
                                                        <option value="remote">False</option>
                                                    </select>
                                                </label>L
                                            </div>
                                            <div className="form-control">
                                                <label className="input-group">
                                                    <select name="role" className="select rounded-lg checkbox-secondary input-bordered w-full border" defaultValue="">
                                                        <option value="" disabled>Status</option>
                                                        <option value="remote">Active</option>
                                                        <option value="remote">Blocked</option>
                                                    </select>
                                                </label>
                                            </div>
                                            <button className="btn my-10 bg-blue-700 btn-block  btn-primary text-white" type="submit">Update Profile</button>
                                        </div>
                                        <form method="dialog" className="modal-backdrop">
                                            <button>close</button>
                                        </form>
                                    </dialog>
                                </td>
                            </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;