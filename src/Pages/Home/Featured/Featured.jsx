import { Link } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";

const Featured = () => {

    const [tests, setTests] = useState([])
    useEffect(() => {
        fetch('https://diagno-easy-server.vercel.app/tests')
            .then(res => res.json())
            .then(data => setTests(data))
    }, [])

    console.log(tests)


    return (
        <div className="">
            <SectionTitle
                heading='Featured Tests'
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-6 my-24">

                {
                    tests.map(test => <div key={test?._id} className="card w-[330px] bg-slate-700">
                        <figure className="">
                            <img className="h-[220px]" src={test?.image} alt="Shoes"  />
                        </figure>
                        <div className="card-body space-y-2">
                            <h2 className="card-title">Test Name: {test?.testName}</h2>
                            <h2 className="card-title">Test Price: {test?.testPrice}</h2>
                            <h2 className="card-title">Date: {test?.date}</h2>
                            <h2 className="card-title">Slots: {test?.slots}</h2>
                            <p className="text-xl text-slate-400">Details: {test?.details}</p>
                            <div className="card-actions">
                                <Link>
                                    <button className="btn bg-blue-600 btn-primary text-white mt-2">Booked Test</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Featured;