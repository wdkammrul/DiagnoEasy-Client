import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../hook/useAxios";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthenticationPage/AuthProvider/AuthProvider";
const DetailsPage = () => {
    const axiosPublic = useAxios()
    const { id } = useParams();
    const {user} = useContext(AuthContext)
    // console.log(userEmail)
    // console.log(id)
    const [details, setDetails] = useState(null)
    useEffect(() => {
        axiosPublic(`/tests/${id}`)
            .then(data => {
                setDetails(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [axiosPublic, id]);

    // console.log(details?.data)

    const userEmail = user?.email
    const singleData = details?.data
    const appointmentData = {userEmail, singleData}
      
    // const axiosPublic = useAxios()
    const handleMakePayment = () => {
      console.log(appointmentData) 
      

        try {
            axiosPublic.post("/appointments", (appointmentData))
                .then(data => {
                    console.log(data);
                    if (data.status === 200) {
                    toast('Appointment Added Successfully')
                    }
                });

            console.log(appointmentData)
        }
        catch (err) {
            console.log(err)
        }
    }


    return (
        <div>
            <div><br /><br /><br /><b></b></div>
            <div className="w-[400px] md:w-[740px] lg:w-full mx-auto">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img
                        className="w-full h-48 md:h-96 object-cover object-center"
                        src={singleData?.image}
                        alt="Job Preview"
                    />
                    <div className="p-6">
                        <div>
                            <h1 className="text-3xl font-bold">Test Name: {singleData?.testName}</h1>
                        </div>
                        <p className="text-gray-700 my-6 text-xl font-bold">Available Date: {singleData?.date}</p>
                        <p className="text-gray-700 my-6 text-xl font-bold">Test Price: {singleData?.testPrice} </p>
                        <div className="md:flex lg:justify-between md:max-w-4xl my-8">
                            <p className="text-gray-700 text-2xl font-bold">Short Desc: {singleData?.details}</p>
                            <div>Slots: {singleData?.slots}</div>
                        </div>

                        {/* <button className="btn bg-blue-600 mb-3 text-white">Make Appointment</button> */}
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn bg-blue-600 mb-3 text-white" onClick={() => document.getElementById('my_modal_2').showModal()}>Make Appointment</button>
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <button onClick={handleMakePayment} className="btn bg-blue-600 mb-3 text-white">Make Payment</button>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;