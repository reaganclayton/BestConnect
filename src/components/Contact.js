import React from 'react';

function Contact() {
    return (
        <div class="container">
            <section class="contact">
                <div class="contact-left">
                    <div class="contact-title">
                        <h2>Contact Us</h2>
                        <h4>Fill out this form and we will be back with you in no time</h4>
                    </div>
                    <form action="/">
                        <div class="contact-left-inputs">
                            <div class="field">
                            <i class="fa fa-user"></i> <label for="name">Your name</label>
                            </div>
                                <input type="text" name="name" />
                            <div class="field">
                                <i class="fa fa-envelope"></i><label for="email">Your e-mail address</label>
                            </div>
                                <input type="email" name="email" id="email" />
                            <div class="field">
                                <i class="fa fa-comment"></i><label for="message">Your message</label>
                            </div>
                                <textarea name="" id="message" cols="30" rows="8"></textarea>
                                <button class="btn">Submit</button>
                        </div>
                    </form>
                </div>
                <div class="contact-right">
                    <h3>Call</h3>
                    <div class="contact-right-call">
                        <i class="fa fa-phone"></i>
                        <p>303.555.5555</p>
                    </div>
                    <h3>Email</h3>
                    <div class="contact-right-email">
                        <i class="fa fa-envelope"></i>
                        <p>support@bestconnect.com</p>
                    </div>
                    <h3>Come In</h3> 
                    <div class="contact-right-address">
                    <i class="fa fa-building"></i>
                    <p id="address">
                        BestConnect, Inc. <br />
                        123 Main Street <br />
                        Denver, CO 80220
                    </p>
                    </div>
                    <h3>Connect</h3>
                    <div class="contact-right-connect">
                        <i class="fa fa-twitter-square"></i>
                        <i class="fa fa-facebook-square"></i>
                        <i class="fa fa-tumblr-square"></i>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;