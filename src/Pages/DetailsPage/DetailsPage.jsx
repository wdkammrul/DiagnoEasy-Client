
const DetailsPage = () => {
    return (
        <div className="w-[400px] md:w-[740px] lg:w-full mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                    className="w-full h-48 md:h-96 object-cover object-center"
                    src='https://i.ibb.co/ZTtvgmy/489212.jpg'
                    alt="Job Preview"
                />
                <div className="p-6">
                    <div>
                        <h1 className="text-3xl font-bold">Title:</h1>
                    </div>
                    <p className="text-gray-700 my-6 text-xl font-bold">Available Date: </p>
                    <div className="md:flex lg:justify-between md:max-w-4xl my-8">
                        <p className="text-gray-700 text-2xl font-bold">Short Desc:</p>
                        <div>Slots</div>
                    </div>                                               
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;