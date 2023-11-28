import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const ContactUs = () => {
    return (
        <div>
            <div><br /><br /><br /></div>
            <SectionTitle
             heading={'Contact Us'}
            ></SectionTitle>
            <div className="mt-10 bg-slate-800 p-20 rounded-lg  w-[400px] md:w-[740px] lg:w-full mx-auto flex items-center justify-center">
                <div className="p-2 md:p-10 rounded md:shadow-2xl w-full ">
                    <h2 className="text-6xl font-bold mb-8 text-center">Contact Us</h2>
                    <p className="text-blue-600 mb-10 text-center md:text-3xl w-full ">Get in touch with us for any questions or queries you may have.</p>

                    <form>
                        <div className="mb-10">
                            <label className="block mb-2"></label>
                            <input className="w-full rounded-lg  border-gray-300 p-3 " type="text" placeholder="Name" name="name" required />
                        </div>

                        <div className="mb-10">
                            <label className="block mb-2"></label>
                            <input className="w-full rounded-lg  border-gray-300 p-3" type="email" placeholder="Email" name="email" required />
                        </div>

                        <div className="mb-8">
                            <label className="block mb-2" ></label>
                            <textarea className="w-full rounded-lg  border-gray-300 p-2" name="message" placeholder="Message" rows="4" required></textarea>
                        </div>

                        <div className="flex justify-center">
                            <button className="btn bg-blue-600 btn-outline text-white p-4 w-80 rounded-lg" type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
