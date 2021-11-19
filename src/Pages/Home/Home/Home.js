import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AllServices from '../AllServices/AllServices';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <AllServices></AllServices>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;