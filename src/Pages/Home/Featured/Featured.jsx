import { Link } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Featured = () => {
    return (
        <div className="">
            <SectionTitle
             heading='Featured Tests'
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-6 my-32">
                <div className="card w-[330px] bg-slate-700">
                    <figure className="">
                        <img src='https://i.ibb.co/NtFTd8J/kamrul1.jpg' alt="Shoes" className="rounded-t-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Title:</h2>
                        <p className="text-xl text-orange-500">Desc:</p>
                        <div className="card-actions">

                            <Link>
                                <button className="btn btn-primary">Book Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card w-[330px] bg-slate-700">
                    <figure className="">
                        <img src='https://i.ibb.co/NtFTd8J/kamrul1.jpg' alt="Shoes" className="rounded-t-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Title:</h2>
                        <p className="text-xl text-orange-500">Desc:</p>
                        <div className="card-actions">

                            <Link>
                                <button className="btn btn-primary">Book Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card w-[330px] bg-slate-700">
                    <figure className="">
                        <img src='https://i.ibb.co/NtFTd8J/kamrul1.jpg' alt="Shoes" className="rounded-t-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Title:</h2>
                        <p className="text-xl text-orange-500">Desc:</p>
                        <div className="card-actions">

                            <Link>
                                <button className="btn btn-primary">Book Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
               

            </div>
        </div>
    );
};

export default Featured;