import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Services = () => {
    return (
        <div>
            <div><br /><br /><br /></div>
            <SectionTitle
              heading={'Our Services'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-8 mt-20">
                <div className="bg-slate-50 p-10 space-y-4 text-black rounded-lg">
                    <img className="w-36" src="https://i.ibb.co/ZV72K0D/service1-61241c61.webp" alt="" />
                    <h1 className="text-3xl font-bold">Doctor at Home</h1>
                    <p className="text-slate-500">Get convenient and personalized healthcare with our doctor-at-home service in Kolkata. Our experienced and qualified doctors will visit you in the comfort of your own home, providing thorough medical examinations, consultations, and prescribing necessary medications.</p>
                    <h2 className="text-blue-600 text-3xl"><span className="underline">Learn More</span> ➥</h2>
                </div>
                <div className="bg-slate-50 p-10 space-y-4 text-black rounded-lg">
                    <img className="w-36" src="https://i.ibb.co/mqNzP1F/service3-4273090e.webp" alt="" />
                    <h1 className="text-3xl font-bold">Lab Test at Home</h1>
                    <p className="text-slate-500">Skip the hassle of visiting a lab by availing our lab test at home service in Kolkata. Our qualified phlebotomists will collect samples from your doorstep and ensure accurate and timely testing. You'll receive reliable results conveniently, without the need to travel or wait in long queues.</p>
                    <h2 className="text-blue-600 text-3xl"><span className="underline">Learn More</span> ➥</h2>
                </div>
                <div className="bg-slate-50 p-10 space-y-4 text-black rounded-lg">
                    <img className="w-36" src="https://i.ibb.co/JH4YQp2/emergency-siren-2828f635.webp" alt="" />
                    <h1 className="text-3xl font-bold">24/7 Ambulance Service</h1>
                    <p className="text-slate-500">DiagnoEasy Healthtech offers reliable and prompt ambulance services in Kolkata. We understand the importance of timely medical assistance during emergencies. Our fleet of well-equipped ambulances, staffed with trained paramedics, is available 24/7 to cater to your emergency medical.</p>
                    <h2 className="text-blue-600 text-3xl"><span className="underline">Learn More</span> ➥</h2>
                </div>
                <div className="bg-slate-50 p-10 space-y-4 text-black rounded-lg">
                    <img className="w-36" src="https://i.ibb.co/zGc3vM0/4444444444444444444ervice2-9277f9ae-1.webp" alt="" />
                    <h1 className="text-3xl font-bold">Medical Procedures</h1>
                    <p className="text-slate-500">Experience the convenience of receiving top-quality medical services in the comfort of your own home with DiagnoEasy. Our services include Ryles tube insertion, bladder wash, catheterization, IV cannulation, IV fluids administration, injections, and post-operative care.</p>
                    <h2 className="text-blue-600 text-3xl"><span className="underline">Learn More</span> ➥</h2>
                </div>
            </div>

            <button className="btn bg-blue-600 w-96 flex mx-auto justify-center items-center mt-16 btn-primary">See All</button>
        </div>
    );
};

export default Services;