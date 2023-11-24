import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const AllUsers = () => {
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
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th></th>
                            <td></td>
                            <td></td>
                            <td>

                            </td>
                            <td>
                                <button></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;