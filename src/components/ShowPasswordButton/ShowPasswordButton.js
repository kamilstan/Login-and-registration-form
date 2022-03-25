import React from "react";

export function ShowPasswordButton(props) {

    const {isShown, showPassword, hidePassword} = props;
    return(

        <>
            <button onMouseDown={showPassword} onMouseUp={hidePassword} >{isShown ? 'Hide Password' : 'Show Password'}</button>
        </>

    )
}