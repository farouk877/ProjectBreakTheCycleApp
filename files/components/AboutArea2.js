import React from 'react';

const AboutArea2 = () => {
    return (
        <section className="about-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="about-semi-img">
                            <img src="/images/bluehoodie.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-heading">
                            <div className="section-heading">
                                <div className="section-icon">
                                    <img src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h2 className="section__title">How We Do It</h2>
                                <p className="section__meta">how does project break the cycle fundraise?</p>
                                <p className="section__desc">
                                    We do the leg work when it comes to creatively fundraising. Currently, 
                                    Project Break The Cycle’s main fundraising streams are external merchandise 
                                    sales and internal corporate matching programs. Over the duration of an 
                                    active campaign, all donations and 100% of profits go towards that specific 
                                    campaign. After a campaign concludes, donations are still accepted for it, 
                                    although 100% of profits from merchandise sales will go to the now 
                                    active campaign. 
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default AboutArea2;
