import React from 'react';
import Feedback from '../Feedback/Feedback';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Places from '../Places/Places';


const Home = () => {
    return (
        <div id="home">
            {/* All home Pages Component */}
            <Banner></Banner>
            <About></About>
            <Places></Places>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;