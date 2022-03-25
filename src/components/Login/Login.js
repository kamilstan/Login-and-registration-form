import {ShowPasswordButton} from "../ShowPasswordButton/ShowPasswordButton";

import "./Login.css"

export const Login = (props) => {

    const {loginData, change, showInfo,infoIsShown,isShown,showPassword,hidePassword} = props;

    const sendForm = e => {
        e.preventDefault();
        console.log(loginData);
    }

    return (
        <>
            <h1>Login form</h1>

            {infoIsShown ? <p className="Login__info">Try one more time with correct data</p> : null}

            <form onSubmit={sendForm}>
                <p>
                    <label>
                        Email <br/>
                        <input
                            type="email"
                            name="email"
                            value={loginData.email}
                            onChange={change}
                        />
                    </label>
                </p>

                <p>
                    <label>
                        Password <br/>
                        <input
                            type={isShown ? 'text' : 'password'}
                            name="password"
                            value={loginData.password}
                            onChange={change}
                        />
                    </label>
                    <ShowPasswordButton isShown={isShown} showPassword={showPassword} hidePassword={hidePassword}/>
                </p>

                <p>
                    <button type="submit" onClick={showInfo}>Login</button>
                </p>
            </form>
        </>

    )
}