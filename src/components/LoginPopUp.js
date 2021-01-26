import React from 'react';

function LoginPopUp() {
    return (
        <div class="pop-up log-in">
            <div class="pop-up-content">
                <i class="fa fa-times close-icon close-icon-log-in"></i>
                <i class="fa fa-users popup-icon"></i>
                <div class="field">
                    <label for="email">Your e-mail address</label>
                </div>
                    <input type="email" name="email" id="email" />
                <div class="field">
                    <label for="password">Your password</label>
                </div>
                    <input type="password" name="password" id="password" />
                <button class="btn">Log In</button>
                <h5 class="switch switch-sign-up">Don't have an account? <a>Sign Up</a></h5>
            </div>
        </div>
    )
}

export default LoginPopUp;