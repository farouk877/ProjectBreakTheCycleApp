import React from 'react';
import Link from 'next/link';

const Campaign = () => {
    return (
        <section className="causes-area causes-area2">
            <div className="container">
                <div className="row blog-content-wrap">
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item1">
                                <div className="blog-img">
                                    <img src="/images/img1.jpg" alt="" />
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><Link href="/campaigns-detail"><a>Orphange in Lebanon</a></Link>
                                    </h3>
                                    <p className="blog__desc">Aliq is notm hendr erit a augue insu image pellen tes.</p>
                                    <ul className="blog__list">
                                        <li><i className="icon-target"></i> Goal: <span>$30,100</span></li>
                                        <li><i className="fa fa-line-chart"></i> Raised: <span>25,270</span></li>
                                    </ul>
                                    <Link href="/donate"><a className="theme-btn">donate now</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item2">
                                <div className="blog-img">
                                    <img src="/images/img2.jpg" alt="" />
                                        <span className="blog__tag"><i className="fa fa-flash"></i> Active</span>
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><Link href="/campaigns-detail"><a>YRRF</a></Link></h3>
                                    <p className="blog__desc">Aliq is notm hendr erit a augue insu image pellen tes.</p>
                                    <ul className="blog__list">
                                        <li><i className="icon-target"></i> Goal: <span>$30,000</span></li>
                                        <li><i className="fa fa-line-chart"></i> Raised: <span>25,270</span></li>
                                    </ul>
                                    <Link href="/donate"><a className="theme-btn">donate now</a></Link>
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
