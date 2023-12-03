// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useAxios from "../../../hook/useAxios";

const AllTest = () => {

    const axiosPublic = useAxios()
    const [tests, setTests] = useState([])
    const [remainingBanner, setRemainingBanner] = useState(tests)
    useEffect(() => {
        fetch('https://diagno-easy-server.vercel.app/tests')
            .then(res => res.json())
            .then(data => setTests(data))
    }, [])


    const handleDelete = async id => {
        console.log(id)
        await axiosPublic.delete(`/tests/${id}`)
            .then(data => {
                console.log("data", data);
                if (data.deletedCount > 0) {
                    const remainingItems = remainingBanner?.filter(item => item._id !== id);
                    // toast('Item Deleted - if Not Updated Please Refresh')
                    console.log('Cart Items', remainingItems);
                    setRemainingBanner(remainingItems);
                }
            })
    }

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
                            <th className="w-5">Details</th>
                            <th>Test Date</th>
                            <th>Price</th>
                            <th>Slots</th>
                            <th>Update</th>
                            <th>Delate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tests.map(test => <tr key={test._id}>
                                <th><div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={test?.image} />
                                    </div>
                                </div></th>
                                <td>{test?.testName}</td>
                                <td>{test?.details}</td>
                                <td>{test?.date}</td>
                                <td>{test?.testPrice}</td>
                                <td>{test?.slots}</td>
                                <td><button className="btn bg-blue-600">Update</button></td>
                                <td><button onClick={() => handleDelete(test?._id)} className="btn bg-blue-600">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTest;
