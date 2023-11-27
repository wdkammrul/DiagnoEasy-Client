import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const OrderMedicines = () => {
    return (
        <div className="">

         <div><br /><br /><br /></div>

            <SectionTitle
               heading={'Order Medicines'}
            ></SectionTitle>

            <div className="grid md:grid-cols-4 mt-20">
                <div className="mx-auto border-r p-10 border-b border-slate-500">
                    <img src="https://i.ibb.co/34WvLc7/3e90265cc173d0bb238b6584b8ed2aac-225x225.png" alt="" />
                    <h1 className="flex justify-center items-center text-3xl font-bold mt-3">MEDICINE</h1>
                </div>
                <div className="mx-auto border-r p-10 border-b border-slate-500">
                    <img src="https://i.ibb.co/dKLvZhn/d9e457546557da9732bb1d0557ac9eb3-225x225.png" alt="" />
                    <h1 className="flex justify-center items-center text-3xl font-bold mt-3">INJECTION</h1>
                </div>
                <div className="mx-auto border-r p-10 border-b border-slate-500">
                    <img src="https://i.ibb.co/mcwLfWQ/0044192031143fdee96c84bb1761dae3-225x225.png" alt="" />
                    <h1 className="flex justify-center items-center text-3xl font-bold mt-3">INSULIN</h1>
                </div>
                <div className="mx-auto  p-10 border-b border-slate-500">
                    <img src="https://i.ibb.co/2nWj84c/ba47f96dae162ef1ca78b029e802042c-225x225.png" alt="" />
                    <h1 className="flex justify-center items-center text-3xl font-bold mt-3">VACCINE</h1>
                </div>
               
            </div>
        </div>
    );
};

export default OrderMedicines;