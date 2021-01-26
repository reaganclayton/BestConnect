import React, { Component } from 'react';
import Loader from '../../src/components/Loader';
import Nav from '../../src/components/Nav';
import SignPopUp from '../../src/components/SignPopUp';
import LoginPopUp from '../../src/components/LoginPopUp';
import Showcase from '../../src/components/Showcase';
import About from '../../src/components/About';
import Packages from '../../src/components/Packages';
import Contact from '../../src/components/Contact';
import SignUp from '../../src/components/SignUp';
import Footer from '../../src/components/Footer';

class Index extends Component {
    render() {
        return (
            <>
                <Loader />
                <Nav />
                <SignPopUp />
                <LoginPopUp />
                <Showcase />
                <About />
                <Packages />
                <Contact />
                <SignUp />
                <Footer />
            </>
        )
    }
}

export default Index;