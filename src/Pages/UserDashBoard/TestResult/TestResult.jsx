import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaDownload } from "react-icons/fa";


const TestResult = () => {
    return (
        <div className="bg-slate-700 p-6 ">
            <SectionTitle
                heading={'Test Result'}
            >
            </SectionTitle>

            <div className="overflow-x-auto p-10">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th className="flex">
                                Download  <span className="ml-3"><FaDownload></FaDownload></span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* { */}
                        {/* users.map((user, index) => <tr key={user._id} */}
                        {/* > */}

                        <tr>
                            <th></th>
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

export default TestResult;