import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Banner = () => {

    const [banners, setBanners] = useState([])
    useEffect(() => {
        if (banners.length === 0) {
            fetch('https://diagno-easy-server.vercel.app/banners')
                .then(res => res.json())
                .then(data => setBanners(data))
                .catch(error => console.error("Error fetching banners:", error));
        }
    }, [banners]);

    const banner = banners?.find(banner => banner.isActive === "true")
    // console.log(banner)

    return (
        <div>
            <div><br /><br /><br /></div>
           {
              <div key={banner?._id} className="hero w-[400px] md:w-[740px] lg:w-full mx-auto bg-teal-200 rounded-b-lg mb-32">
                    <div className="hero h-[230px] md:h-[430px] rounded-lg" style={{ backgroundImage: `url(${banner?.image})` }}>
                        <div className="hero-overlay bg-opacity-80"></div>
                        <div className="hero-content text-center text-neutral-content ">
                            <div className="max-w-7xl">
                                <h1 className="mb-5 text-2xl md:text-4xl lg:text-7xl font-extrabold text-blue-500">{banner?.bannerTitle}</h1>
                                <p className="mb-5 text-xl md:text-4xl my-6 font-medium">{banner?.description}</p>
                                <h1 className="text-2xl">Is Active: {banner?.isActive}</h1>
                                <h1 className="text-3xl font-bold my-3">discount rate <span className="text-red-600">{banner?.couponRate}%</span> for coupon code</h1>
                                <h1 className="text-2xl">Coupon Name: {banner?.couponCodeName}</h1>
                                <div className="form-control ">
                                    <div className="input-group flex justify-center mx-auto mt-4">
                                        {/* <input type="text" value={banner?.couponCodeName} placeholder="Coupon Code..." className="input input-bordered" /> */}
                                        
                                        {/* <button className="btn btn-square btn-secondary w-20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button> */}

                                    </div>
                                    <NavLink to='/allTests' className="btn btn-primary bg-blue-500 mt-6 w-64 flex justify-center mx-auto text-white">All Tests</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           }
        </div>
        
    );
};

export default Banner;