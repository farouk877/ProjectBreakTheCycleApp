import React, {Component} from 'react';

class Footer extends Component {
    constructor(){
        super()
        this.state = {
          scrollBtn: false
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

      if (window.scrollY > 100) {
        this.setState({
            scrollBtn: true
        });
      } else if (window.scrollY < 100) {
        this.setState({
            scrollBtn: false
        });
      }

    }

    scrollTop = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <section className="footer-area">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row footer-widget-wrap">
                                <div className="col footer-item footer-item3">
                                    <h3 className="widget__title">Newsletter</h3>
                                    <ul className="foot__links">
                                        <li><a href="#">Podcasts</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Videos</a></li>
                                        <li><a href="#">Terms of Use</a></li>
                                    </ul>
                                    <div className="footer__social">
                                        <ul>
                                            <li><a href="https://instagram.com/projectbreakthecycle"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="https://facebook.com/projectbreakthecycle"><i className="fa fa-facebook"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col footer-item footer-item1">
                                    <h3 className="widget__title">Quick Links</h3>
                                    <ul className="foot__links">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">About</a></li>
                                        <li><a href="/causes">Causes</a></li>
                                        <li><a href="/blog">Updates</a></li>
                                        <li><a href="/contact">Contact</a></li>
                                        <li><a href="/shop">Shop</a></li>
                                        <li><a href="/donate">Donate</a></li>

                                    </ul>
                                </div>
                                <div className="col footer-item footer-item4">
                                    <h3 className="widget__title">Legal</h3>
                                    <ul className="contact__info">
                                        <li>Project Break The Cycle Inc</li>
                                        <li>Registered 501(c)3 nonprofit organization</li>
                                        <li>EIN: 81-4564351</li>
                                        <li>Bridgewater, NJ but serving the globe</li>
                                        <li><a href="mailto:info@projectbreakthecycle.com">info@projectbreakthecycle.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="copyright-desc">
                                        <p>© Copyright 2020 <a href="https://www.projectbreakthecycle.com">Project Break The Cycle</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div onClick={this.scrollTop} id="back-to-top" className={this.state.scrollBtn ? 'back-btn-shown' : ''}>
                    <i className="fa fa-angle-up" title="Go top"></i>
                </div>

            </div>
        );
    }
}

export default Footer;