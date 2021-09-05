import React , { useState } from 'react';
import "./Login.css"
import { Link } from 'react-router-dom';
import header_Img1 from '../../assets/header_icon.png';
import { auth } from '../../firebase';


function Login() {
    
//   const [email , setEmail] = useState('');
//   const [password , setPassword] = useState('');


//     const handleLogin = async(event,email,password) =>{  
//         event.preventDefault();
//         try{
//             await auth.signInWithEmailAndPassword(email , password)
//         }catch(err) {
//             console.log("errorrrrrr")
//             alert("oops please enter valid credentials")
//         } 
//     }

//     const handleRegister = (event) =>{
//         event.preventDefault();
//         auth.createUserWithEmailAndPassword(email , password)
//         .then((auth)=>{
            
//         })
//         .catch((e => alert("oops please enter valid credentials")))

//     }
//     console.log(setEmail)
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
                    <button  className="signIn_btn">Sign In</button>
                </form>
                <p>After signing-in you must agree to our store conditions,
                 and feel free to share your basic information along with us.</p>
                {/* <button onClick={ handleRegister } className="register_btn">Create a new account</button> */}
                <h5>already having account ?<span> Sign Up</span></h5>
            </div>
        </div>
    )
}

export default Login;
