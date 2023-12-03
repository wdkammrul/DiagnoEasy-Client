import useAxios from "../../hook/useAxios";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { useParams, useLoaderData } from "react-router-dom";

const Update = () => {

    const { id } = useParams()
    console.log(id)

    const {_id, testName, image, testPrice, slots, date, details } = useLoaderData()
    console.log(testName)

    const axiosPublic = useAxios()
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const testName = form.testName.value;
        const image = form.image.value;
        const testPrice = form.testPrice.value;
        const slots = form.slots.value;
        const date = form.date.value;
        const details = form.details.value;

        const testUpdate = { testName, image, testPrice, slots, date, details }
        // console.log(addTest);

        
        console.log(testUpdate)

        try {
            axiosPublic.patch(`/tests/${_id}`, (testUpdate))
                .then(data => {
                    console.log(data);
                    if (data.status === 200) {
                        // toast('Appointment Added Successfully')
                    }
                });

            console.log(testUpdate)
        }
        catch (err) {
            console.log(err)
        }

    }
      

    return (
        <div>
            <div><br /><br /><br /><br /></div>
            <div className="rounded-lg w-11/12 md:w-11/12 lg:w-full mx-auto bg-slate-700 p-10">
                <SectionTitle
                    heading={'Update'}
                ></SectionTitle>
                <form onSubmit={handleUpdate}>
                    <div className="md:flex mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Banner Name*</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={testName} name="testName" placeholder="Banner Name" className="input checkbox-secondary input-bordered w-full rounded-lg" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Image*</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={image} name="image" placeholder="Image" className="input checkbox-secondary input-bordered w-full rounded-lg" />
                            </label>
                        </div>
                    </div>

                    <div className="md:flex mb-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Date*</span>
                            </label>
                            <label className="input-group">
                                <input type="date" defaultValue={date} name="date" placeholder="Banner Title" className="input checkbox-secondary input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <div className="md:flex mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Test Price*</span>
                            </label>
                            <label className="input-group">
                                <input type="testPrice" defaultValue={testPrice} name="testPrice" placeholder="Test Price" className="input checkbox-secondary input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Slots*</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="slots" defaultValue={slots} placeholder="Slots" className="input checkbox-secondary input-bordered w-full rounded-lg" />
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
                                <textarea className="input checkbox-secondary input-bordered w-full" defaultValue={details} name="details" placeholder="Details" id="" cols="30" rows="10"></textarea>
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