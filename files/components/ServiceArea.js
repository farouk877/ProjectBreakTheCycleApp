import React from 'react';

const ServiceArea = () => {
    return (
        <section className="service-area text-center">
            <img src="/images/heart-icon1.png" alt="" className="heart-icon heart-icon-1" />
            <img src="/images/heart-icon2.png" alt="" className="heart-icon heart-icon-2" />
            <img src="/images/heart-icon3.png" alt="" className="heart-icon heart-icon-3" />
            <img src="/images/heart-icon4.png" alt="" className="heart-icon heart-icon-4" />
            <img src="/images/heart-icon5.png" alt="" className="heart-icon heart-icon-5" />
            <img src="/images/heart-icon6.png" alt="" className="heart-icon heart-icon-6" />
            <img src="/images/heart-icon7.png" alt="" className="heart-icon heart-icon-7" />
            <img src="/images/heart-icon8.png" alt="" className="heart-icon heart-icon-8" />
            <img src="/images/heart-icon9.png" alt="" className="heart-icon heart-icon-9" />
            <img src="/images/heart-icon10.png" alt="" className="heart-icon heart-icon-10" />
            <img src="/images/heart-icon11.png" alt="" className="heart-icon heart-icon-11" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="section-heading service-heading">
                            <div className="section-icon">
                                <img src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title">Mission Statement</h2>
                            {/* <p className="section__meta">help us now</p> */}
                        </div>
                    </div>
                </div>
                <div className="row service-wrap">
                    <div className="col">
                        <div className="service-item service-item1">
                            <div className="service-item-inner">
                                {/* <div className="service-icon">
                                    <i className="icon-peace-1"></i>
                                </div> */}
                                <div className="service-content">
                                    {/* <h4 className="service__title">hope</h4> */}
                                    <p className="service__desc" >
                                        We're a group dedicated to ending the viscious cycle of poverty 
                                        through sustainable actions! This includes, but is not limited to,
                                        funding private education in developing countries, alieviating financial 
                                        stressors such as funding meals, and establishing long-term resources
                                        to put an end to generational poverty.
                                    </p>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="button-shared">
                            <a href="/donate" className="theme-btn">Donate</a>
                            <a href="/shop" className="theme-btn">Shop</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceArea;
