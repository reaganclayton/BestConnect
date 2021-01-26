import React from 'react';

function SignPopUp() {
    return (
        <div class="pop-up sign-up">
            <div class="pop-up-content">
                <i class="fa fa-times close-icon close-icon-sign-up"></i>
                <i class="fa fa-users popup-icon"></i>
                <div class="field">
                    <label for="email">Your e-mail address</label>
                </div>
                    <input type="email" name="email" id="email" />
                <div class="field">
                    <label for="password">Your password</label>
                </div>
                    <input type="password" name="password" id="password" />
                <button class="btn">Sign Up</button>
                <h5 class="switch switch-log-in">Already have an account? <a href="/#">Log In</a></h5>
            </div>
        </div>
    )
}

export default SignPopUp;