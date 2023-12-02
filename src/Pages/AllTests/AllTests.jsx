import { Link } from "react-router-dom";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";


const AllTests = () => {
    const [tests, setTests] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/tests')
            .then(res => res.json())
            .then(data => setTests(data))
    }, [])

    return (
        <div>
            <div><br /><br /><br /></div>

            <SectionTitle
              heading={'All Tests'}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-5">
              
                {
                    tests.map(test => <div key={test._id} className="mt-10 relative flex lg:w-full md:w-full lg:max-w-[48rem] max-w-[390px] md:max-w-[580px] bg-slate-500 text-white mx-auto md:flex-row flex-col rounded-xl  bg-clip-border  shadow-md">
                        <div className="relative h-full md:h-full md:w-2/5  rounded-xl rounded-r-none"> 
                            <img src={test?.image} alt="" />
                        </div>
                        <div className="p-10">
                            <h6 className="mb-2 block font-sans text-base font-normal  leading-relaxed tracking-normal rounded-lg  antialiased">
                                Test Name: {test?.testName}
                            </h6>
                            <h4 className="mb-2 block font-sans text-base font-normal leading-snug tracking-normal text-blue-gray-900 antialiased">
                                Available Dates: {test?.date}
                            </h4>
                            <p className="mb-2 block font-sans text-base font-normal leading-relaxed  antialiased">
                                Slots: {test?.slots}
                            </p>
                            <p className="mb-2 block font-sans text-base font-normal leading-relaxed  antialiased">
                              Test Price: {test?.testPrice}
                            </p>
                            <p className="mb-2 block font-sans text-base font-normal leading-relaxed  antialiased">
                                Desc: {test?.details}
                            </p>
                            <div className="flex gap-">
                                <Link to={`/details/${test?._id}`}><button
                                    className="flex select-none  items-center gap-2 rounded-lg py-4 mt-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white transition-all bg-blue-600 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >

                                    Details

                                </button></Link>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default AllTests;