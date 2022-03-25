import {useState} from "react";
import {Login} from "../Login/Login";
import {Registration} from "../Registration/Registration";
import './MyForm.css'

export const MyForm = () => {

    const [siteContent, setSiteContent] = useState(true)

    const [registrationData, setRegistrationData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmationPassword: '',
    });

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const [passwordIsShown, setPasswordIsShown] = useState(false);

    const [infoIsShown, setInfoIsShown] = useState(false)

    const correctData = {
        email: 'a@b.c',
        password: '1234',
    };

    const changeToLogin = (e) => {
        e.preventDefault()
        setSiteContent(true)
    }

    const changeToRegistration = (e) => {
        e.preventDefault()
        setSiteContent(false)
    }

    const showInfo = (e) => {
        e.preventDefault();
        (loginData.email === correctData.email && loginData.password === correctData.password) ? setInfoIsShown(false) : setInfoIsShown(true);

    }

    const showPassword = (e) => {
        setPasswordIsShown(true);
    }

    const hidePassword = (e) => {
        setPasswordIsShown(false);
    }

    const changeRegistrationData = e => setRegistrationData( registrationData => ({
        ...registrationData,
        [e.target.name]: e.target.value
    }))
    const changeLoginData = e => {
        setInfoIsShown(false);
        return setLoginData(loginData => ({
            ...loginData,
            [e.target.name]: e.target.value
        }))
    }

    return(
        <>
            <div className="LoginForm__menu">
                <a href="#" onClick={changeToLogin}>Login</a>
                <a href="#" onClick={changeToRegistration}>Registration</a>
            </div>
            {siteContent ?
                <Login
                    loginData={loginData}
                    change={changeLoginData}
                    isShown={passwordIsShown}
                    showPassword={showPassword}
                    hidePassword={hidePassword}
                    infoIsShown={infoIsShown}
                    showInfo={showInfo}
                /> :
                <Registration
                    registrationData={registrationData}
                    change={changeRegistrationData}
                />
            }




        </>



    )
}