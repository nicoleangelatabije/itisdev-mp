import React from "react";
import { FormEventHandler, useState} from "react";

function Login() {

    const [userInfo, setUserInfo] = useState({userID: '', password: ''});

    return (
        <form>
            <h1> Login </h1>
            <input 
                    value={userInfo.userID}
                    onChange={({ target}) => 
                        setUserInfo({...userInfo, userID: target.value})
                    }
                    type='name' 
            />
            <input 
                    value={userInfo.password}
                    onChange={({ target}) => 
                        setUserInfo({...userInfo, password: target.value})
                    }
                    type='password' 
            />
            <input type='submit' value='Login' />
        </form>
    )
}

export default Login;