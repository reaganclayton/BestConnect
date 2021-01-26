import React from 'react';

function Packages() {
    return (
        <section class="packages">
            <div class="packages-title">
                <h2>A plan for everyone</h2>
                <h4>Plans & Pricing</h4>
            </div>
            <div class="container">
                <div class="packages-cards">
                    <div class="basic">
                        <h4>Basic Plan</h4>
                        <h1>$49</h1>
                        <p>
                            Up to 1000 Mbps up & down <br />
                            Lowest ping times <br />
                            No setup fees <br />
                            No data cap <br />
                            No contract <br />
                            24/7 support
                        </p>
                        <button class="btn">Select Plan</button>
                    </div>
                    <div class="plus">
                        <h4>Plus Plan</h4>
                        <h1>$79</h1>
                        <p>
                            Up to 1000 Mbps up & down <br />
                            Lowest ping times <br />
                            No setup fees <br />
                            No data cap <br />
                            No contract <br />
                            24/7 support
                        </p>
                        <button class="btn">Select Plan</button>
                    </div>
                    <div class="pro">
                        <h4>Pro Plan</h4>
                        <h1>$99</h1>
                        <p>
                            Up to 1000 Mbps up & down <br />
                            Lowest ping times <br />
                            No setup fees <br />
                            No data cap <br />
                            No contract <br />
                            24/7 support
                        </p>
                        <button class="btn">Select Plan</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Packages;