import React, {Component} from 'react';
import RGF from 'react-google-forms'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        // alert('Donation Amount: $' + this.state.value + ".00");
        event.preventDefault();
      }

    render() {
        return (
            <section className="contact-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <div className="section-icon">
                                    <img src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h2 className="section__title">Get in Touch With Us</h2>
                                <p className="section__meta">Write a message</p>
                                <p className="section__desc">
                                    This is where we will be allowing new artists to collobrate with the form
                                </p>
                                <ul className="section__list">
                                    <li><a href="https://www.instagram.com/projectbreakthecycle/?hl=en"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-shared">
                            
                                <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScym1ZaOZkkajIK6thNpnb_-KjyTdzEAhkY8NF9k3KYdlfoNg/formResponse" method="post"
                                    target="hidden_iframe" onsubmit="msgSubmitted=true;" autocomplete="on">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6 form-group">
                                            <input className="form-control" name="entry.1415061761" type="text" autocomplete="given-name" placeholder="Full Name" required/>
                                            {/* <input className="form-control" type="text" name="name" placeholder="Full Name" /> */}
                                        </div>

                                        <div className="col-lg-6 col-sm-6 form-group">
                                            <input id="emailAddressMsgInput" name="entry.208702895" type="email" autocomplete="email" class="form-control" placeholder="Email address" required/>
                                            {/* <input className="form-control" type="email" name="email"
                                                placeholder="Email Address" /> */}
                                        </div>

                                        <div className="col-lg-12 form-group">
                                            <input id="phoneNumberMsgInput" name="entry.1100408356" type="number" class="form-control" placeholder="Phone Number"/>

                                            {/* <input className="form-control" type="number" name="phone"
                                                placeholder="Phone Number" /> */}
                                        </div>

                                        <div className="col-lg-12 col-sm-12 form-group">
                                            <textarea id="messageContentInput" name="entry.1101411408" type="text" class="form-control" placeholder="Write a Message" required></textarea>

                                            {/* <textarea className="textarea" name="message"
                                                    placeholder="Write a Message"></textarea> */}
                                        </div>

                                        <div className="col-lg-12 col-sm-12">
                                            <button className="theme-btn submit__btn" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <RGF config={formConfig} formURL={"https://docs.google.com/forms/d/e/1FAIpQLScym1ZaOZkkajIK6thNpnb_-KjyTdzEAhkY8NF9k3KYdlfoNg/viewform?embedded=true"}/> */}

                    </div>
                    <div className="row contact-detail-action">
                        <div className="col-lg-4">
                            <div className="contact-item contact-item1">
                                <h3 className="contact__title">About</h3>
                                <p className="contact__desc">
                                    We are looking for artists and nonprofits to collobrate with us
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-item contact-item2">
                                <h3 className="contact__title">Address</h3>
                                <p className="contact__desc">
                                    660 broklyn street , 88 new york, United states of
                                    america
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-item contact-item3">
                                <h3 className="contact__title">Contact</h3>
                                <p className="contact__desc">
                                    needhelp@oxpitan.com <br />
                                    666 888 000
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );

    }
};
export default Contact;
