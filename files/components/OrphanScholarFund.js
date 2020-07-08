import React from 'react';
import Link from 'next/link';

const OrphanScholarFund = () => {
    return (
        <section className="causes-detail-area">
            <div className="container">
                <div className="row blog-content-wrap">
                    <div className="col-lg-8">
                        <div className="blog-content">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <span className="blog__tag" style={{ color: 'orange' }}><i className="fa fa-lock"></i> Previous</span>

                                    <img src="/images/playingcards770x453.jpg" alt="" />
                                </div>
                                <div className="blog-inner-content">
                                    <div className="inner-causes-box">
                                        <h3 className="blog__title">Orphan Children Scholarship Fund</h3>
                                        <ul className="blog__list">
                                            <li><i className="icon-target"></i> Goal: <span>$10,000</span></li>
                                            <li><i className="fa fa-line-chart"></i> Raised: <span>$16,631</span></li>
                                        </ul>
                                    </div>
                                    <div className="inner-causes-btn">
                                        <Link href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SKD88K8R387KQ&source=url"><a className="theme-btn">donate now</a></Link>
                                    </div>
                                    
                                </div>
                                <div className="blog-inner-content-2">
                                    <p className="causes__text">
                                    We understand that providing a healthy environment for children to grow up in is critical for their futures. Many children that are trapped in the cycle of poverty never have the opportunities to make sustainable changes in their lives. Working alongside the Home of Tripoli for Social Welfare, Project Break The Cycle wants to create a safe, sustainable environment for orphans to grow up in where they can eventually break free from generational poverty.
                                    </p>
                                    <p className="causes__text causes__text2">
                                    We realize that education is paramount for individuals to sustainably change their lives. With a better education, there are better job outlooks paying better salaries, thus allowing individuals to better support their families and break free from the poverty cycle. To reach our goal, we’ve partnered with the Home of Tripoli for Social Welfare based in Tripoli, Lebanon to organize a scholarship pool, where funds will be used for private school tuition, private after-school teachers, books, and other school supplies. Our goal is to provide a $10,000 education fund for HTSW. Since the Lebanese public education system is currently in shambles, small financial support in regards to education can have big impacts on these children. The costing details can be found below. Please support this project by donating directly to the campaign!
                                    </p>
                                    {/* <div className="inner-causes-img-box row">
                                        <div className="col-lg-6">
                                            <div className="inner-causes-img-item inner-causes-img-item1">
                                                <img src="/images/img13.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="inner-causes-img-item inner-causes-img-item2">
                                                <img src="/images/img14.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div> */}
                                    <p className="causes__text">
                                        <ul>
                                            <li>2x full-tuition scholarship for 1 grade-school-year: $7,466</li>
                                            <li>2x after school private teacher (price per child): $667</li>
                                            <li>2x school supplies (books, stationary, etc.): $667</li>
                                            <li>2x school bag: $100</li>
                                            <li>2x transportation fees: $933</li>
                                            <li>2x miscellaneous items (snacks, uniforms, etc.): $167</li>
                                        </ul>
                                        <br/>
                                    </p>    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sidebar-shared">
                            <div className="side-widget">
                                <h2 className="widget__title">Share Cause</h2>
                                <div className="side-share-profile">
                                    <ul>
                                        {/* <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li> */}
                                        <li><a href="/orphan-scholarship-fund"><i className="fa fa-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrphanScholarFund;
