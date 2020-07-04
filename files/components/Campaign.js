import React from 'react';
import Link from 'next/link';

const Campaign = () => {
    return (
        <section className="causes-area causes-area2">
            <div className="container">
                <div className="row blog-content-wrap">
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item2">
                                <div className="blog-img">
                                    <img src="/images/incomegen.jpg" alt="" />
                                        <span className="blog__tag"><i className="fa fa-flash"></i> Active</span>
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title">
                                        <Link href="/farming-income-generation">
                                            <a href="https://yemenfoundation.org/">Income Generation Farming Project</a>
                                        </Link>
                                    </h3>
                                    <p className="blog__desc">
                                        Working alongside the Yemen Relief and Reconstruction Foundation to fund construction 
                                        of small farms where families can not only reap benefits of animal produce, but also 
                                        sell surplus back into local markets.
                                    </p>
                                    <ul className="blog__list">
                                        <li><i className="icon-target"></i> Goal: <span>$18,000</span></li>
                                        <li><i className="fa fa-line-chart"></i> Raised: <span>$155</span></li>
                                    </ul>
                                    <Link href="/farming-income-generation"><a className="theme-btn">learn more</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item1">
                                <div className="blog-img">
                                    <img src="/images/playinggames_campaign.jpg" alt="" />
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><Link href="/orphan-scholarship-fund"><a>Orphan Children Scholarship Fund</a></Link>
                                    </h3>
                                    <p className="blog__desc">
                                        Working with the Home of Tripoli for Social Welfare to support a scholarship pool funding 
                                        private-school tuitions and after-school tutors for orphan children in Tripoli, Lebanon.
                                    </p>
                                    <ul className="blog__list">
                                        <li><i className="icon-target"></i> Goal: <span>$10,000</span></li>
                                        <li><i className="fa fa-line-chart"></i> Raised: <span>$16,631</span></li>
                                    </ul>
                                    <Link href="/orphan-scholarship-fund"><a className="theme-btn">learn more</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item1">
                                <div className="blog-img">
                                    <img src="/images/img1.jpg" alt="" />
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title">Coming Soon...</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Campaign;
