import React from 'react';
import "./Login.css"
import { Link } from 'react-router-dom';
import header_Img1 from '../../assets/header_icon.png'


function Login() {

    const handleLogin = (event) =>{
        event.preventDefault();

    }

    const handleRegister = (event) =>{
        event.preventDefault();
        
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo"
                src={ header_Img1 }
                alt=""
                /> 
            </Link>
            <div className="login_container">
                <h1>Sign-In</h1>
                <form>
                    <h4>Email</h4>
                    <input 
                    type="email"
                    placeholder="abc@gmail.com"
                    />
                    <h4>Password</h4>
                    <input 
                    type="password"
                    placeholder="abc123"
                    />
                    {/* <i class="fas fa-eye"></i> */}
                    <button onClick={ handleLogin} className="signIn_btn">Sign In</button>
                </form>
                <p>After signing-in you must agree to our store conditions,
                 and feel free to share your basic information along with us.</p>
                <button onClick={ handleRegister } className="register_btn">Create your new account</button>
            </div>
        </div>
    )
}

export default Login;
