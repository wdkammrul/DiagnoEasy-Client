import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useAxios from "../../../hook/useAxios";

const Appointments = () => {

    const axiosPublic = useAxios()
    const [appointments, setAppointments] = useState([])
    const [remainingBanner, setRemainingBanner] = useState(appointments)
    useEffect(() => {
        fetch('https://diagno-easy-server.vercel.app/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    const handleDelete = async id => {
        console.log(id)
        await axiosPublic.delete(`/appointments/${id}`)
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

    // console.log(appointments[0]?.userEmail)
    // console.log(appointments)
    // console.log(appointments[0]?.singleData)

    // const allAppointment = appointments[0]?.singleData


    // const handleCancel = () => {
    //     console.log(cancel)
    // }

    return (
        <div className="bg-slate-700 p-6 ">
            <SectionTitle
                heading={'Appointments'}
            >
            </SectionTitle>

            <div className="overflow-x-auto p-4">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Test Name</th>
                            <th>Test Data</th>
                            <th>Test Details</th>
                            <th>Test Price</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* console.log(appointment?.singleData?.testName) */}
                        {
                            appointments.map(appointment => <tr key={appointment._id}>
                                <th></th>
                                <td>{appointment?.singleData?.testName}</td>
                                <td>{appointment?.singleData?.date}</td>
                                <td>{appointment?.singleData?.details}</td>
                                <td>{appointment?.singleData?.testPrice}</td>
                                <td><button onClick={() => handleDelete(appointment?._id)} className="btn bg-blue-600">Cancel</button></td> 
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Appointments;