import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import PersonalizedSlider from "../PersonalizedSlider/PersonalizedSlider";

const Home = () => {
    return (
        <div>
            <h1>This Is Home</h1>
            <Banner></Banner>
            <Featured></Featured>
            <PersonalizedSlider></PersonalizedSlider>
        </div>
    );
};

export default Home;