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
                            <th>Profile Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Blood</th>
                            <th>District</th>
                            <th>Upazila</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;