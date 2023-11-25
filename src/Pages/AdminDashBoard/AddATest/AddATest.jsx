import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const AddATest = () => {
    return (
        <div className="bg-slate-700 p-5">
            <SectionTitle heading="Add A Test"></SectionTitle>
            <div>
                <form>
                    <div className="md:flex w-full gap-6">
                        <div className="w-10/12">
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Name*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={name}
                                    placeholder="Name"
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
                                    defaultValue={name}
                                    placeholder="Image"
                                    // {...register('name', { required: true })}
                                    required
                                    className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Price*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={name}
                                    placeholder="Price"
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
                                <textarea placeholder="Details" name="" id="" cols="10" rows="3"></textarea>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3">
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Slots*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={name}
                                    placeholder="Slots"
                                    // {...register('name', { required: true })}
                                    required
                                    className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Slots*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={name}
                                    placeholder="Slots"
                                    // {...register('name', { required: true })}
                                    required
                                    className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Slots*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={name}
                                    placeholder="Slots"
                                    // {...register('name', { required: true })}
                                    required
                                    className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Slots*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={name}
                                    placeholder="Slots"
                                    // {...register('name', { required: true })}
                                    required
                                    className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Slots*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={name}
                                    placeholder="Slots"
                                    // {...register('name', { required: true })}
                                    required
                                    className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Slots*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={name}
                                    placeholder="Slots"
                                    // {...register('name', { required: true })}
                                    required
                                    className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Slots*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={name}
                                    placeholder="Slots"
                                    // {...register('name', { required: true })}
                                    required
                                    className="input input-bordered w-full" />
                            </div>
                        </div>
                        
                    </div>
                   
                </form>
            </div>
        </div>
    );
};

export default AddATest;