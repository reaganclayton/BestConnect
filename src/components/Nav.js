import React from 'react';

function Nav() {
    return (
        <section class="nav">
            <div class="nav-items">
                <a href="/#"><h2 class="logo" id="mobile-logo"><span>best</span>connect</h2></a>
                <div class="hamburger">
                    <div class="hamburger-lines"></div>
                </div>
            </div>

            <ul class="nav-links">
                <div class="nav-left">
                    <li><a href="/#" id="nav-about">About</a></li>
                    <li><a href="/#" id="nav-packages">Packages</a></li>
                    <li><a href="/#" id="nav-contact">Contact</a></li>
                </div>

                <div class="nav-right">
                    <li><a href="/#" id="log-in">Log In</a></li>
                    <li><a href="/#" id="sign-up">Sign Up</a></li>
                </div>
            </ul>
        </section>
    )
}

export default Nav;