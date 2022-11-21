import React from "react";
import { FormEventHandler, useState} from "react";

function SignIn() {

    return (
        <form>
            <h1> Login </h1>
            <form action="/api/login" method="post">
                <label>
                    User ID
                </label>
                <input type='userID' name='userID' placeholder="Type your email"></input>
                <label>
                    Password
                </label>
                <input type='password' name='password' placeholder="Type your password"></input>
                <input type='submit' value='Login' />
            </form>
        </form>
    )
}

export default SignIn;