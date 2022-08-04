import React from "react";
import { Auth,googleprovider, facebookprovider } from "../Auth/firebase";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

const Login = () => {

    const navigate = useNavigate()

    function SigninGoogle () {
        signInWithPopup(Auth, googleprovider)
        .then((res) => {
            console.log(res);
            navigate("/UserList")
        })
        .catch((error) => {
            console.log(error);
        })
    }

    function SigninFacebook () {
        signInWithPopup(Auth, facebookprovider)
        .then((res) => {
            console.log(res);
            navigate("/UserList")
        })
        .catch((error) => {
            console.log(error);
        })
    }

  

    return (
        <div className="LoginPage">
            <div className="SigninGoogle">
                <button onClick={SigninGoogle}>Google</button>
                <button onClick={SigninFacebook}>Facebook</button>
            </div>
        </div>
    )
}

export default Login;