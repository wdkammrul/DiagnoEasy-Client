// import { NavLink } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import useAxios from "../../../hook/useAxios";


const AllBanners = () => {

    const axiosPublic = useAxios()
    const [banners, setBanners] = useState([])
    const [remainingBanner, setRemainingBanner] = useState(banners)

    useEffect(() => {
        fetch('https://diagno-easy-server.vercel.app/banners')
            .then(res => res.json())
            .then(data => setBanners(data))
    }, [])


    const handleDelete = async id => {
        console.log(id)
        await axiosPublic.delete(`/banners/${id}`)
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
                heading={'All Banners'}
            >
            </SectionTitle>

            <div className="overflow-x-auto p-4">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Details</th>
                            <th>Active</th>
                            <th>Coupon Code</th>
                            <th>Coupon Rate</th>
                            {/* <th>Update</th> */}
                            <th>Delate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            banners.map(banner => <tr key={banner._id}>
                                <th><div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={banner?.image} />
                                    </div>
                                </div></th>
                                <td>{banner?.bannerName}</td>
                                <td>{banner?.bannerTitle}</td>
                                <td>{banner?.description}</td>
                                <td>{banner?.isActive}</td>
                                <td>{banner?.couponCodeName}</td>
                                <td>{banner?.couponRate}</td>
                                {/* <td><NavLink to='/update' className='bg-blue-600 btn  text-white'>Update</NavLink></td> */}

                                <td><button onClick={() => handleDelete(banner?._id)} className="btn bg-blue-600">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBanners;