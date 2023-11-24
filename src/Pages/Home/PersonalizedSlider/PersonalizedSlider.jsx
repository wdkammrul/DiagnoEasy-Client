const PersonalizedSlider = () => {
    return (
        <div>
            {/* <!-- Personalized Recommendations Slider --> */}
            <section className="bg-slate-800 p-8 mt-8">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Personalized Recommendations</h2>

                    {/* <!-- Swiper Slider Container --> */}
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {/* <!-- Recommendation Slide 1 --> */}
                            <div className="swiper-slide bg-gray-200 p-4 rounded shadow-md">
                                <p className="text-gray-600">Health Tip 1</p>
                            </div>

                            {/* <!-- Recommendation Slide 2 --> */}
                            <div className="swiper-slide bg-gray-200 p-4 rounded shadow-md">
                                <p className="text-gray-600">Health Tip 2</p>
                            </div>

                            {/* <!-- Add more recommendation slides as needed --> */}
                        </div>

                        {/* <!-- Add Pagination --> */}
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default PersonalizedSlider;