export const Registration = (props) => {

    const {registrationData, change} = props;

    const sendForm = e => {
        e.preventDefault();
        console.log(registrationData);
    }

    return (
        <>
            <h1>Registration form</h1>

            <form onSubmit={sendForm}>
                <p>
                    <label>
                        Firstname <br/>
                        <input
                            type="text"
                            name="firstname"
                            value={registrationData.firstname}
                            onChange={change}
                            style={(registrationData.firstname.length < 3 && registrationData.firstname.length > 0) ? {border: 'red solid 1px'} : {border: 'black solid 1px'}}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Lastname <br/>
                        <input
                            type="text"
                            name="lastname"
                            value={registrationData.lastname}
                            onChange={change}
                            style={(registrationData.lastname.length < 3 && registrationData.lastname.length > 0) ? {border: 'red solid 1px'} : {border: 'black solid 1px'}}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Email <br/>
                        <input
                            type="email"
                            name="email"
                            value={registrationData.email}
                            onChange={change}
                            style={(!registrationData.email.includes('@') && registrationData.email.length > 0) ? {border: 'red solid 1px'} : {border: 'black solid 1px'}}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Password <br/>
                        <input
                            type="password"
                            name="password"
                            value={registrationData.password}
                            onChange={change}
                            style={(registrationData.password.length < 8 && registrationData.password.length > 0 ) ? {border: 'red solid 1px'} : {border: 'black solid 1px'}}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Confirm password <br/>
                        <input
                            type="password"
                            name="confirmationPassword"
                            value={registrationData.confirmationPassword}
                            onChange={change}
                            style={(registrationData.password !== registrationData.confirmationPassword && registrationData.confirmationPassword.length > 0 ) ? {border: 'red solid 1px'} : {border: 'black solid 1px'}}
                        />
                    </label>
                </p>


                <p>
                    <button type="submit">Register</button>
                </p>
            </form>
        </>

    )
}