import React , { useState ,useEffect } from 'react';
import "./Login.css"
import { Link } from 'react-router-dom';
import header_Img1 from '../../assets/header_icon.png';
import { auth } from '../../firebase';


function Login() {
    
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);
   
    const clearInputs = () =>{
     setEmail('');
     setPassword('');
    }
   
    const clearErrors = () =>{
      setEmailError('');
      setPasswordError('');
    };
   
    const handleLogin = async(event) =>{  
       event.preventDefault();
       clearErrors();
       try{
         await auth.signInWithEmailAndPassword(email , password)
       }catch(err){
         switch (err.code) {
           case "auth/invalid-email":
           case "auth/user-disabled":
           case "auth/user-not-found":
             setEmailError(err.message)
             break;
           case "auth/wrong-password":
             setPasswordError(err.message)
             break;
         }
       };
     }
   
     const handleSignup = async(event) =>{
       event.preventDefault();
       clearInputs();
       try{
         await auth.createUserWithEmailAndPassword(email , password)
       }catch(err){
         switch (err.code) {
           case "auth/email-already-in-use":
           case "auth/invalid-email":
             setEmailError(err.message)
             break;
           case "auth/weak-password":
             setPasswordError(err.message)
             break;
         }
       }
     }
   
     const handleSignout = () =>{
       auth.signOut();
     };
   
     const authListner = () =>{
       auth.onAuthStateChanged((user)=>{
         if(user){
           clearInputs();
           setUser(user);
         }else{
           setUser("")
         }
       });
     };
   
     useEffect(()=>{
       authListner();
     },[])

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
                    autoFocus
                    required
                    value={ email }
                    placeholder="abc@gmail.com"
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <h4>Password</h4>
                    <input 
                    type="password"
                    required
                    value={ password }
                    placeholder="abc123"
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <div>
                        {hasAccount ? (
                            <>
                                <button className="signIn_btn"
                                onClick={ handleLogin }
                                >Sign in</button>
                                <p>Don't have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign up</span></p>
                            </>
                        ) : (
                            <>
                                <button className="signIn_btn"
                                onClick={ handleSignup }
                                >Sign up</button>
                                <p>Have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign in</span></p>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
