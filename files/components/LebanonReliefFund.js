import React from 'react';
import Link from 'next/link';

const LebanonReliefFund = () => {
    return (
        <section className="causes-detail-area">
            <div className="container">
                <div className="row blog-content-wrap">
                    <div className="col-lg-8">
                        <div className="blog-content">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <span className="blog__tag" style={{ color: '#008000' }}><i className="fa fa-flash"></i> Active</span>

                                    <img src="/images/beirutafterblast.jpg" alt="" />
                                </div>
                                <div className="blog-inner-content">
                                    <div className="inner-causes-box">
                                        <h3 className="blog__title">Lebanon Relief Fund</h3>
                                        <ul className="blog__list">
                                            <li><i className="icon-target"></i> Goal: <span>$10,000</span></li>
                                            {/* <li><i className="fa fa-line-chart"></i> Raised: <span>$320</span></li> */}
                                        </ul>
                                    </div>
                                    <div className="inner-causes-btn">
                                        <Link href="https://www.gofundme.com/f/local-emergency-relief-fund-for-lebanon"><a className="theme-btn">learn more</a></Link>
                                    </div>
                                    
                                </div>
                                <div className="blog-inner-content-2">
                                    <p className="causes__text" style={{"color":"green"}}>
                                    Our current active fundraising campaign for Yemen is still ongoing, but we have established a separate fundraiser 
                                    for our Lebanon Relief Fund on GoFundMe, linked above. 
                                    </p>
                                    <p className="causes__text">
                                    Please use the link above to access our GoFundMe page, where more detailed information and updates about 
                                    our fundraiser can be found.
                                    </p>
                                    {/* <p className="causes__text causes__text2">
                                    The core principle of our mission is sustainably alleviating poverty throughout 
                                    the Middle East. Our campaign aims to generate streams of income by distributing 
                                    animals to impoverished families, where they can use animal produce for cooking 
                                    meals and sell the surplus in local markets. This project will be facilitated 
                                    through our partnership with the Yemen Relief and Reconstruction Foundation 
                                    (YRRF). YRRF’s extensive network in Yemen renders it one of the few nonprofit 
                                    organizations that can provide direct relief to the region. You can learn more 
                                    about YRRF’s other impactful projects on their website,   
                                    <Link href = "https://yemenfoundation.org/project/income-generation/"><a> linked here</a></Link>. 
                                    </p>
                                    <p className="causes__text">
                                        Our goal is to raise $17,500 total to fund the purchase, delivery, and implementation of the required items to create three separate income generation projects. The first project will consist of purchasing 80 goats, feed, and veterinary services to be implemented in Hudaydah Governorate in Yemen. This project will be able to sustain 20 families, who will each receive 4 goats. The second and third projects will consist of purchasing 550 egg-laying chickens with feed for a total of 1100 chickens. These two projects will be implemented in two other Governorates, and are projected to support approximately 100 families who will each receive 11 chickens. On average, each family in Yemen has 6 members; thus, the total work from our three projects are expected to impact 720 people. Previous YRRF projects that leveraged goats for income generation report that no animals were sold or slaughtered within a year.  Rather, each family’s flock had approximately doubled in size. In order to ensure effective use of the animals, the families are visited quarterly to monitor impact and give advice about flock raising. Please support this project by donating directly or visiting our <a href="/shop">Shop</a>, where 100% of profits are donated to this active campaign! If our fundraising goal is exceeded, the remaining funds will fund other similar income generation projects through YRRF. The costing breakdown is listed below: 
                                    </p>
                                    <div>
                                    <ul>
                                        <li>80 goats: $8,000</li>
                                        <li>40 bags of feed: $400</li>
                                        <li>Veterinary Services: $300</li>
                                        <li>Purchase and distribute chickens (550): $4000</li>
                                        <li>Chicken feed: $100</li>
                                        <li>Purchase and distribute chickens (550): $4000</li>
                                        <li>Chicken feed: $100</li>
                                        <li>Administration, logistics, transportation and distribution cost: $600</li>
                                    </ul>
                                    <br/>
                                    </div>
                                    <div>
                                    <p className="causes_text">
                                        Further information can be found here: <Link href = "https://yemenfoundation.org/project/income-generation/"><a>https://yemenfoundation.org/project/income-generation/</a></Link>
                                    </p>
                                    </div> */}

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
                                        <li><a href="/lebanon-relief-fund"><i className="fa fa-link"></i></a></li>
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

export default LebanonReliefFund;
