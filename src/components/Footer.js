import React from 'react';

function Footer() {
    return (
        <footer class="footer">
            <div class="footer-content">
                <div class="links">
                    <ul>
                        <li class="col-title">Company</li>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Packages</li></a>
                        <a href="#"><li>Careers</li></a>
                        <a href="#"><li>Support</li></a>
                    </ul>
                    <ul>
                        <li class="col-title">Policies</li>
                        <a href="#"><li>Privacy</li></a>
                        <a href="#"><li>Terms of Service</li></a>
                        <a href="#"><li>Acceptable Use</li></a>
                    </ul>
                    <ul>
                        <li class="col-title">Contact Us</li>
                        <li>303.555.555</li>
                        <li>support@bestconnect.com</li>
                    </ul>
                    <ul>
                        <li class="col-title">Address</li>
                        <li>BestConnect, Inc.</li>
                        <li>123 Main Street</li>
                        <li>Denver, CO 80220</li>
                    </ul>
                </div>
                <div class="footer-bottom">
                    <h2 class="footer-item" id="second"><a href="#">best<span>connect</span></a></h2>
                    <h5 class="footer-item" id="third">Follow us on <a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a></h5>
                    <h6 class="footer-item" id="first">2020 BestConnect. All rights reserved.</h6>
                </div>
            </div>
        </footer>
    )
}

export default Footer;