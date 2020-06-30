import React from 'react';

const CallToActionTwo = () => {
    return (
        <section className="cta-area text-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-sm-6">
                        <div className="cta-item cta-item1">
                            <h3 className="cta__title">Sponsor an entire campaign</h3>
                            <a href="/sponsorship" className="theme-btn">become an sponsor</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <div className="cta-item cta-item2">
                            <h3 className="cta__title">Dedicate monthly contributions</h3>
                            <a href="/donate" className="theme-btn">Donate</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToActionTwo;
