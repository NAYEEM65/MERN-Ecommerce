import React from 'react';
import Footer from '../common/Footer/Footer';
import Navbar from '../common/Header/Navbar';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="min-h-[85vh]">{children}</div>
            <Footer />
        </>
    );
};

export default Layout;
