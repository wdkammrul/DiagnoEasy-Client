import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Update = () => {
    return (
        <div>
            <div><br /><br /><br /><br /></div>
            <div className="rounded-lg w-11/12 md:w-11/12 lg:w-full mx-auto bg-slate-700 p-10">
                <SectionTitle
                    heading={'Update Banner'}
                ></SectionTitle>
                <form>
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
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Date*</span>
                            </label>
                            <label className="input-group">
                                <input type="date" name="date" placeholder="Banner Title" className="input checkbox-secondary input-bordered w-full" />
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
                                <span className="label-text">Details*</span>
                            </label>
                            <label className="input-group mt-2">
                                {/* <input type="text" name="description" placeholder="Job description" className="input checkbox-secondary input-bordered w-full" /> */}
                                <textarea className="input checkbox-secondary input-bordered w-full" name="details" placeholder="Details" id="" cols="30" rows="10"></textarea>
                            </label>
                        </div>
                    </div>
                    <button className="btn bg-blue-700 btn-block my-6 btn-primary text-white" type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export default Update;