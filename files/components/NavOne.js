import React, {Component} from 'react';
import Link from 'next/link';

class NavOne extends Component {
    constructor(){
        super()
        this.state = {
          sticky: false
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);

        //Mobile Menu
        this.mobileMenu();
    }

    handleScroll = () => {

      if (window.scrollY > 100) {
        this.setState({
            sticky: true
        });
      } else if (window.scrollY < 100) {
        this.setState({
            sticky: false
        });
      }

    }

    mobileMenu = () => {
        //Mobile Menu Toggle
        let mainNavToggler = document.querySelector(".mobile-menu-toggle");
        let mainNav = document.querySelector(".side-nav-container");

        mainNavToggler.addEventListener("click", function () {
            mainNav.classList.add('active');
        });

        //Close Mobile Menu
        let closeMenu = document.querySelector(".side-menu-close");
            closeMenu.addEventListener("click", function () {
            mainNav.classList.remove('active');
        });

    }

    render() {
        return (
            <div>
                <header className="header-area">
                    <div className={`header-top header-menu-action ${this.state.sticky ? 'header-fixed' : ''}`}>
                        <div className="container">
                            <div className="row ostion-top-wrap">
                                <div className="col-lg-5 col-sm-5 site-branding">
                                    <div className="logo-action d-flex align-items-center">
                                        <div className="ostion-logo">
                                            <Link href="/">
                                                <a>
                                                    <img src="/images/logo.png" alt="Oxpitan" title="Oxpitan" />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="header-btn ml-auto">
                                            <Link href="/donate">
                                                <a className="theme-btn">donate now</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-sm-7 ostion-menu">
                                    <div className="ostion-menu-innner">
                                        <div className="ostion-menu-content">
                                            <div className="navigation-top">
                                                <nav className="main-navigation">
                                                    <ul>
                                                        <li className="active"><Link href="/"><a>Home</a></Link></li>
                                                        <li className="active"><Link href="/causes"><a>Causes</a></Link></li>
                                                        <li className="active"><Link href="/donate"><a>Donate</a></Link></li>
                                                        <li className="active"><Link href="/gallery"><a>Shop</a></Link></li>
                                                        <li className="active"><Link href="/blog"><a>Updates</a></Link></li>

                                                        <li className="active"><Link href="/contact"><a>Contact</a></Link></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="mobile-menu-toggle">
                                            <i className="fa fa-bars"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="side-nav-container">
                        <div className="humburger-menu">
                            <div className="humburger-menu-lines side-menu-close"></div>
                        </div>
                        <div className="side-menu-wrap">
                            <ul className="side-menu-ul">
                                {/* Might need to change className for mobile compatiblity */}
                                <li className="sidenav__item"><Link href="/"><a>Home</a></Link></li>
                                <li className="sidenav__item"><Link href="/causes"><a>Causes</a></Link></li>
                                <li className="sidenav__item"><Link href="/gallery"><a>Shop</a></Link></li>
                                <li className="sidenav__item"><Link href="/contact"><a>Contact</a></Link></li>
                                <li className="sidenav__item"><Link href="/contact"><a>contact</a></Link></li>
                            </ul>
                            <div className="side-btn">
                                <Link href="/donate"><a className="theme-btn">donate now</a></Link>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default NavOne;