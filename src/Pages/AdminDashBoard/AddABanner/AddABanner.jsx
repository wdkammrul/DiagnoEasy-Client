import useAxios from "../../../hook/useAxios";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const AddABanner = () => {

    const axiosPublic = useAxios()
    const handleAddBanner = (e) => {

        e.preventDefault();
        const form = e.target;
        const bannerName = form.bannerName.value;
        const image = form.image.value;
        const bannerTitle = form.bannerTitle.value;
        const isActive = form.isActive.value;
        const couponCodeName = form.couponCodeName.value;
        const couponRate = form.couponRate.value;
        const description = form.description.value;


        const addBanner = { bannerName, image, bannerTitle, isActive, couponCodeName, couponRate, description }
        console.log(addBanner);

        try {
            axiosPublic.post("/banners", (addBanner))
                .then(data => {
                    console.log(data);
                    // if (data.insertedId) {
                    // toast('Test Added Successfully')
                    //     form.reset();
                    // }
                });

            console.log(addBanner)
        }
        catch (err) {
            console.log(err)
        }

    }


    return (
        <div className="rounded-lg w-11/12 md:w-11/12 lg:w-full mx-auto bg-slate-700 p-10">

            <SectionTitle
                heading={'Add Banner'}
            ></SectionTitle>
            <form onSubmit={handleAddBanner}>
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Banner Name*</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="bannerName" placeholder="Banner Name" className="input checkbox-secondary input-bordered w-full rounded-lg" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Image*</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image" className="input checkbox-secondary input-bordered w-full rounded-lg" />
                        </label>
                    </div>
                </div>




                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Banner Title*</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="bannerTitle" placeholder="Banner Title" className="input checkbox-secondary input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Is Active*</span>
                        </label>
                        <label className="input-group">
                            <select name="isActive" className="select rounded-lg checkbox-secondary input-bordered w-full border" defaultValue="">
                                <option value="" disabled>isActive</option>
                                <option value='true'>True</option>
                                <option value='false'>False</option>
                            </select>
                        </label>
                    </div>
                </div>


                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coupon Code Name*</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="couponCodeName" placeholder="Coupon Code Name " className="input checkbox-secondary input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Coupon Rate*</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="couponRate" placeholder="Coupon Rate" className="input checkbox-secondary input-bordered w-full rounded-lg" />
                        </label>
                    </div>
                </div>


                <div className="md:flex mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            {/* <input type="text" name="description" placeholder="Job description" className="input checkbox-secondary input-bordered w-full" /> */}
                            <textarea className="input checkbox-secondary input-bordered w-full" name="description" placeholder="Banner description" id="" cols="30" rows="10"></textarea>
                        </label>
                    </div>
                </div>


                <button className="btn bg-blue-700 btn-block btn-primary text-white" type="submit">Add Banner</button>


            </form>


        </div>
    );
};

export default AddABanner;