import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const AllTest = () => {
    return (
        <div className="bg-slate-700 p-6 ">
            <SectionTitle
                heading={'All Test'}
            >
            </SectionTitle>

            <div className="overflow-x-auto p-4">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Reservation</th>
                            <th>Update</th>
                            <th>Delete</th>
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

export default AllTest;
