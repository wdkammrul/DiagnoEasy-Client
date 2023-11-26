import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const AddABanner = () => {
    return (
        <div className="rounded-lg w-11/12 md:w-11/12 lg:w-full mx-auto bg-slate-700 p-10">

            <SectionTitle
                heading={'Add Banner'}
            ></SectionTitle>
            <form>
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name*</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" className="input checkbox-secondary input-bordered w-full rounded-lg" />
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
                            <span className="label-text">Title*</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder="Title" className="input checkbox-secondary input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">IsActive*</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="isActive" placeholder="IsActive" className="input checkbox-secondary input-bordered w-full" />
                        </label>
                    </div>
                </div>


                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coupon Code Name*</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="jobApplicatsNumber" placeholder="Coupon Code Name " className="input checkbox-secondary input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Coupon Rate*</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image" className="input checkbox-secondary input-bordered w-full rounded-lg" />
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
                            <textarea className="input checkbox-secondary input-bordered w-full" name="description" placeholder="Job description" id="" cols="30" rows="10"></textarea>
                        </label>
                    </div>
                </div>


                <button className="btn bg-blue-700 btn-block btn-primary text-white" type="submit">Add Banner</button>


            </form>


        </div>
    );
};

export default AddABanner;