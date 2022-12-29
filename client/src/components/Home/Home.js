import React from 'react';
import Banner from '../common/Header/Banner';
import Layout from '../layout/Layout';
import Products from '../Products/Products';

const Home = () => {
    return (
        <Layout>
            <Banner />
            <Products />
        </Layout>
    );
};

export default Home;
