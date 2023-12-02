import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Appointments = () => {

    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    console.log(appointments[0]?.userEmail)
    console.log(appointments)
    // console.log(appointments[0]?.singleData)

    const allAppointment = appointments[0]?.singleData

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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map(appointment => <tr key={appointment._id}>
                                <th></th>
                                <td>{allAppointment?.testName}</td>
                                <td>{allAppointment?.date}</td>
                                <td>{allAppointment?.details}</td>
                                <td>{allAppointment?.testPrice}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Appointments;