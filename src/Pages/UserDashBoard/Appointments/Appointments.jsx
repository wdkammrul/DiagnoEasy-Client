const Appointments = () => {
    return (
        <div>
            <div className="flex justify-evenly my-6">
                <h2 className="text-3xl">Appointments</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* { */}
                        {/* users.map((user, index) => <tr key={user._id} */}
                        {/* > */}

                        <tr>
                            <th> </th>
                            <td></td>
                            <td></td>
                            <td>
                                {/* {user.role === 'admin' ? 'Admin' : <button
                                        onClick={() => handleMakeAdmin(user)}
                                        className="btn btn-lg bg-orange-500">
                                        <FaUsers className="text-white 
                                        text-2xl"></FaUsers>
                                    </button>} */}
                            </td>
                            <td>
                                <button
                                // onClick={() => handleDeleteUser(user)}
                                // className="btn btn-ghost btn-lg">
                                // <FaTrashAlt className="text-red-600"></FaTrashAlt
                                >
                                </button>
                            </td>
                        </tr>
                        {/* ) */}
                        {/*  } */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Appointments;