// import { useEffect, useState } from "react";
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
                            <th>Test Photo</th>
                            <th>Test Name</th>
                            <th>Details</th>
                            <th>Test Date</th>
                            <th>Price</th>
                            <th>Slots</th>
                            <th>Update</th>
                            <th>Delate</th>    
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
                            <td><button className="btn bg-blue-600">Update</button></td>
                            <td><button className="btn bg-blue-600">Delete</button></td> 
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTest;
