import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import NewsSingle from "../components/NewsSingle";
import OurOfficialRelaunchNews from '../components/OurOfficialRelaunchNews';
import SummaryJune2020 from '../components/SummaryJune2020';

const SummaryJune2020Page = () => {
    return (
        <Layout pageTitle="PBTC | Our Official Relaunch">
            <NavOne />
            <PageHeader title="Our Official Relaunch" />
            <SummaryJune2020 />
            <Footer />
        </Layout>
    );
};

export default SummaryJune2020Page;
