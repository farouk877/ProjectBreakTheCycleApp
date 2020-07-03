import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import CallToAction from '../components/CallToAction';
import FarmingIncomeGen from '../components/FarmingIncomeGen';

const FarmingIncomeGenerationPage = () => {
    return (
        <Layout pageTitle="PBTC | Income Generation Farming Project">
            <NavOne />
            <PageHeader title="Income Generation Farming Project" />
            <FarmingIncomeGen />
            <CallToAction />
            <Footer />
        </Layout>
    );
};

export default FarmingIncomeGenerationPage;
