import React,{useEffect} from 'react';
import Link from 'next/link';

const Shop = () => {

    useEffect(() => {
        const lightbox = GLightbox({
            touchNavigation: true,
            loop: true,
            autoplayVideos: true,
            beforeSlideLoad: (slide, data) => {
                // Need to execute a script in the slide?
                // You can do that here...
            }
        });

    });
    return (
        <section className="gallery-area2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <Link href="/item-detail">
                            <img src="/images/gallery-img7.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <Link href="/item-detail">
                            <img src="/images/gallery-img7.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <Link href="/item-detail">
                            <img src="/images/gallery-img7.jpg" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;
