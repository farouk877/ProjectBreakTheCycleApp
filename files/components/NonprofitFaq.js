import React, {Component} from 'react';

class NonprofitFaq extends Component {

    componentDidMount() {
        new Accordion('.accordion-container');
    }



    render() {
        return (
            <section className="faq-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <div className="section-icon">
                                    <img src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h2 className="section__title">Questions?</h2>
                                <p className="section__meta">frequently asked questions</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="accordion-container">
                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">How do you select nonprofit partners?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">
                                            When selecting partners, we look at the organization’s mission, 
                                            current fundable campaigns, track record, public rapport, and 
                                            whether or not they are proven, transparent, and relevant. 
                                        </p>
                                    </div>
                                </div>

                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">How do you ensure nonprofit partners are honest?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">
                                            Before partnering, we dive deep into each of our criteria categories, 
                                            browsing contribution history, tax records, documented work, and so much more. 
                                        </p>
                                    </div>
                                </div>

                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">How can my nonprofit partner with PBTC?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">
                                            If you are interested in a potential partnership, please email 
                                            info@projectbreakthecycle.com with an informal inquiry. Our 
                                            team will take it from there.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default NonprofitFaq;