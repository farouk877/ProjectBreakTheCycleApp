import React from 'react';

const AboutArea3 = () => {
    return (
        <section className="about-area">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-7">
                        <div className="about-heading">
                            <div className="section-heading">
                                <div className="section-icon">
                                    <img src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h2 className="section__title">Our Founding Story</h2>
                                <p className="section__meta">how did we start?</p>
                                <p className="section__desc">
                                    “The idea of Project Break The Cycle started when our group of friends noticed a lack 
                                    of transparency in fundraising initiatives from large nonprofit organizations. 
                                    Back in highschool, our Humanitarian Club would always have fundraisers for NPOs 
                                    with global footprints, but we never actually understood where our money went. We 
                                    combined our hobbies in fashion and needs for organizational transparency to create 
                                    Project Break The Cycle - an organization leveraging creative fundraising mechanisms 
                                    to empower other proven, transparent, and relevant NPO’s. After our initial Cherry 
                                    Blossom sweatshirt sale, we developed a network of people wanting to support meaningful 
                                    causes but also receive a piece of memorabilia in return. And we haven’t looked back since.”
                                    <br/> - Farouk Marhaba, Founder &amp; President
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-semi-img">
                            <img src="/images/logo_white_padding_400x349.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutArea3;
