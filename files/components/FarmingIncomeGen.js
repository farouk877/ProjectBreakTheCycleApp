import React from 'react';
import Link from 'next/link';

const FarmingIncomeGen = () => {
    return (
        <section className="causes-detail-area">
            <div className="container">
                <div className="row blog-content-wrap">
                    <div className="col-lg-8">
                        <div className="blog-content">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <span className="blog__tag" style={{ color: '#008000' }}><i className="fa fa-flash"></i> Active</span>

                                    <img src="/images/incomegen770x453.jpg" alt="" />
                                </div>
                                <div className="blog-inner-content">
                                    <div className="inner-causes-box">
                                        <h3 className="blog__title">Income Generation Farming Project</h3>
                                        <ul className="blog__list">
                                            <li><i className="icon-target"></i> Goal: <span>$18,000</span></li>
                                            <li><i className="fa fa-line-chart"></i> Raised: <span>$320</span></li>
                                        </ul>
                                    </div>
                                    <div className="inner-causes-btn">
                                        <Link href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SKD88K8R387KQ&source=url"><a className="theme-btn">donate now</a></Link>
                                    </div>
                                    
                                </div>
                                <div className="blog-inner-content-2">
                                    <p className="causes__text">
                                    Sustainability is a large facet of our mission. Breaking the cycle of poverty and injustice cannot happen with a one-time cash donation. Creating streams of income and resources that won’t deplete when we leave the region are the most effective ways of ensuring communities can help themselves well into the future. 
                                    </p>
                                    <p className="causes__text causes__text2">
                                    In a country of 29 million, over 17 million do not have access to enough food. This campaign aims to establish small farms for several families, where they can use animal produce for cooking meals and sell surplus in local markets. By supporting this project, you are directly impacting families for generations to come. This project would be facilitated through our partnership with the Yemen Relief and Reconstruction Fund, <Link href = "https://yemenfoundation.org/project/income-generation/">linked here</Link>. 
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
                                    Our goal is to raise $18,060 total to fund the purchase, delivery, and implementation of the required items to create three separate income generation projects. The first project will consist of purchasing 80 goats, feed, and veterinary services to be implemented in Abbs, Yemen. The second and third projects will consist of purchasing 550 egg-laying chickens with feed for a total of 1100 chickens. These two projects will be implemented in Saada, Yemen and Bani Alharth, Yemen. The costing breakdown will be listed below. Please support this project by donating directly or visiting our Shop, where 100% of profits are donated to this active campaign!
                                    </p> 

                                    <div>
                                    <ul>

                                        <li>80 goats: $8,000</li> 
                                        <li>40 bags of feed: $400</li>
                                        <li>Purchase goats/travel: $200</li>
                                        <li>Veterinarian: $200</li>
                                        <li>Distribution cost: $160</li>
                                        <li>Travel to Hajja and back: $200</li>
                                        <li>Transport of goats: $600</li>
                                        <li>Hotel in Hajja: $100</li>
                                        <li>Purchase and distribute chickens (550): $4000</li>
                                        <li>Chicken feed: $100</li>
                                        <li>Purchase and distribute chickens (550): $4000</li>
                                        <li>Chicken feed: $100</li>

                                    </ul>
                                    <br/>
                                    </div>
                                    <div>
                                    <p className = 'causes_text'>
                                        Further information can be found here: <Link href = "https://yemenfoundation.org/project/income-generation/">https://yemenfoundation.org/project/income-generation/</Link>
                                    </p>
                                    </div>

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
                                        <li><a href="/farming-income-generation"><i className="fa fa-link"></i></a></li>
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

export default FarmingIncomeGen;
