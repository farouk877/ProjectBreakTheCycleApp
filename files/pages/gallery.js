import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Shop from "../components/Shop";

const GalleryPage = () => {
    return (
        <Layout pageTitle="PBTC | Shop">
            <NavOne />
            <PageHeader title="Shop" />
            <Shop />
            <Footer />
        </Layout>
    );
};

export default GalleryPage;
