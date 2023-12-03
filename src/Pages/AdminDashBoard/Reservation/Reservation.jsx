import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useAxios from "../../../hook/useAxios";

const Reservation = () => {

    const axiosPublic = useAxios()
    const [appointments, setAppointments] = useState([])
    const [remainingBanner, setRemainingBanner] = useState(appointments)
    const [filteredAppointments, setFilteredAppointments] = useState([])
    const [searchEmail, setSearchEmail] = useState('')
    useEffect(() => {
        fetch('https://diagno-easy-server.vercel.app/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    console.log(filteredAppointments)

    const handleSearch = () => {
        if (searchEmail.trim() !== '') {
            const filtered = appointments.filter(appointment => appointment.userEmail === searchEmail)
            setFilteredAppointments(filtered)
        } else {
            setFilteredAppointments(appointments)
        }
    }

    const handleInputChange = (e) => {
        setSearchEmail(e.target.value)
        console.log(e)
    }

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

    return (
        <div className="bg-slate-700 p-6 ">
            <SectionTitle
                heading={'Reservation'}
            >
            </SectionTitle>

            <div className="form-control ">
                <div className="input-group flex justify-center mx-auto mt-4">
                    <input type="email" name="email" placeholder="Search here..." className="input input-bordered rounded-r-none" value={searchEmail} onChange={handleInputChange} />
                    <button onClick={handleSearch} className="btn btn-square rounded-l-none btn-secondary w-20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto p-4">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Test Name</th>
                            <th>Email</th>
                            <th>Test Data</th>
                            <th>Test Details</th>
                            <th>Test Price</th>
                            <th>Update</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* console.log(appointment?.singleData?.testName) */}
                        {
                            filteredAppointments.map(appointment => <tr key={appointment._id}>
                                <th></th>
                                <td>{appointment?.singleData?.testName}</td>
                                <td>{appointment?.userEmail}</td>
                                <td>{appointment?.singleData?.date}</td>
                                <td>{appointment?.singleData?.details}</td>
                                <td>{appointment?.singleData?.testPrice}</td>
                                <td><button onClick={() => handleDelete(appointment?._id)} className="btn bg-blue-600">Update</button></td>
                                <td><button onClick={() => handleDelete(appointment?._id)} className="btn bg-blue-600">Cancel</button></td>
                               
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reservation;