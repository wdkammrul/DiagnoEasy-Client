import { toast } from "react-toastify";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useAxios from "../../../hook/useAxios";

const AddATest = () => {

    const axiosPublic = useAxios()
    const handleAddATest = (e) => {
        e.preventDefault();
        const form = e.target;
        const testName = form.testName.value;
        const image = form.image.value;
        const testPrice = form.testPrice.value;
        const slots = form.slots.value;
        const date = form.date.value;
        const details = form.details.value;

        const addTest = { testName, image, testPrice, slots, date, details }
        // console.log(addTest);

        try {
            axiosPublic.post("/tests", (addTest))
                .then(data => {
                    console.log(data);
                    if (data.status === 200) {
                        toast('Appointment Added Successfully')
                        form.reset()
                    }
                });

            console.log(addTest)
        }
        catch (err) {
            console.log(err)
        }

    }





    return (
        <div className="bg-slate-700 p-5">
            <SectionTitle heading="Add A Test"></SectionTitle>
            <div>
                <form onSubmit={handleAddATest}>
                    <div className="md:flex w-full gap-6">
                        <div className="w-10/12">
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Test Name*</span>
                                </label>
                                <input
                                    type="text"
                                    name="testName"
                                    defaultValue={name}
                                    placeholder="Test Name"
                                    // {...register('name', { required: true })}
                                    required
                                    className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Image*</span>
                                </label>
                                <input
                                    type="text"
                                    name="image"
                                    defaultValue={name}
                                    placeholder="Image"
                                    // {...register('name', { required: true })}
                                    required
                                    className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Test Price*</span>
                                </label>
                                <input
                                    type="number"
                                    name="testPrice"
                                    defaultValue={name}
                                    placeholder="Test Price"
                                    // {...register('name', { required: true })}
                                    required
                                    className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Slots*</span>
                                </label>
                                <input
                                    type="number"
                                    name="slots"
                                    defaultValue={name}
                                    placeholder="Slots"
                                    // {...register('name', { required: true })}
                                    required
                                    className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Date*</span>
                                </label>
                                <input
                                    type="Date"
                                    name="date"
                                    defaultValue={name}
                                    placeholder="Date"
                                    // {...register('name', { required: true })}
                                    required
                                    className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Details*</span>
                                </label>
                                <textarea placeholder="" name="details" id="" cols="10" rows="3"></textarea>
                            </div>


                            <input className="btn btn-block bg-blue-600 my-6" type="submit" value="Add A Test" />
                        </div>



                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddATest;