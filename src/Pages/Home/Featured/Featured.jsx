const Featured = () => {
    return (
        <div>
            {/* <!-- Featured Tests and Promotions --> */}
            <section className="bg-slate-700 my-20 ">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8">Featured Tests</h2>

                    {/* Featured Tests Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Featured Test Card */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img src="test-image.jpg" alt="Test Image" className="w-full h-40 object-cover mb-4 rounded-md" />
                            <p className="text-xl font-semibold mb-2">Test Name</p>
                            <p className="text-gray-600">Date: MM/DD/YYYY</p>
                            <p className="text-gray-600">Slots: 5</p>
                        </div>

                        {/* Add more featured test cards as needed */}
                    </div>

                    {/* Promotions Section */}
                    <h2 className="text-3xl font-semibold text-gray-800 mt-12 mb-8">Promotions</h2>

                    {/* Promotion Card */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-600">Promotion Text</p>
                    </div>
                </div>
            </section>

  
        </div>
    );
};

export default Featured;