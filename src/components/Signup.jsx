import { Link } from 'react-router-dom';
import './signup.css';
import { useState } from "react";
import { signup } from "../utils/api";
import { useNavigate } from "react-router-dom";
import {  useEffect } from 'react';
const SignUp = () =>{
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await signup(fullName, email, password);
            alert(data.message);
            localStorage.setItem('fullName', fullName);
            navigate("/");
        } catch (error) {
            alert("Error: " + error.response.data.error);
        }
    };
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.isIntersecting
                    ? entry.target.classList.add('show')
                    : entry.target.classList.remove('show');
            });
        });
    
        document.querySelectorAll('.item1, .item3').forEach(el => {
            observer.observe(el);
        });
    
        return () => observer.disconnect();
    }, []);
    return(  <>
   <div className="item1">
  <h4>Join LiveNature</h4>
  <p>Where growth meets gratitude.
  Your garden is just a click away.</p>
</div>
    <div className="item2">
      <form onSubmit={handleSubmit} className="form_main">
    <p className="heading">Sign Up</p>
    <div className="inputContainer">      
    <svg className="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
          <path
          d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"
        ></path>  
        </svg> 
        <input type="text" id="fullName" className="inputField" placeholder="Full Name" onChange={(e) => setFullName(e.target.value)} required/>
      </div>
    
<div className="inputContainer">
<svg className="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
        <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
        </svg>
        <input type="email" id="email" className="inputField" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
    </div>
    <div className="inputContainer">
    <svg className="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
    </svg>
    <input type="password" id="password" className="inputField" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
</div>  
<div className="remember1">
<label><input type="checkbox"/> I agree to the terms & conditions</label>
      </div>  
<button id="button" type="submit">Submit</button>
<div className="register-link">
     <p>Already have an account? <Link to="/signin">Sign In</Link>
    </p>
  </div>
  <script src="signin.js"></script>
</form>
    </div>
    <div className="item3">
      <img src="./src/img/1746107702862-removebg-preview.png" alt=""/>
      <img src="./src/img/1746107702873-removebg-preview.png" alt=""/>
      <img src="./src/img/1735478385933-removebg-preview.png" alt=""/>
    </div>
    </>
    );
  
};
export default SignUp;
