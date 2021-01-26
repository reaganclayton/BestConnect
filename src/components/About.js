import React from 'react';

function About() {
    return (
        <div class="container">
            <section class="about-cards">
                <div class="fast-card">
                    <i class="fa fa-rocket"></i>
                    <h3>Super Fast</h3>
                    <p>With speeds up to 1000 Mbps and consistently low ping times, 
                        our services excedes all others in the Denver Area.</p>
                </div>
                <div class="fees-card">
                    <i class="fa fa-check-circle"></i>
                    <h3>No hidden fees. Ever.</h3>
                    <p>All of our rates reflect what you will always pay. No setup fees, 
                        data overcharges, or contract charges.</p>
                </div>
                <div class="support-card">
                    <i class="fa fa-life-ring"></i>
                    <h3>Always here for you</h3>
                    <p>Our customer service team is trained to help you with any question 
                        or concern you have, day or night.</p>
                </div>
            </section>
        </div>
    )
}

export default About;