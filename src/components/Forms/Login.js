import React, { useState } from 'react'
import "./style.css";
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";

const Login = ({uuid}) => {
    const [roomId, setRoomId] = useState(uuid());
    
    const [emailLog, setEmailLog] = useState("");
    const [password, setpassword] = useState("");
    const [flag, setFlag] = useState(true);
    
    const navigate  = useNavigate();
    
    const handlesubmit = () => {
        let email = localStorage.getItem("abc@gmail.com");
        let pass = localStorage.getItem("abc@123");

        if(!email || !password){
            setFlag(true);
            console.log("Empty");
        }else if(emailLog !== email || password !== pass ){
            setFlag(true);

        }else{
            setRoomId(!roomId)
            setFlag(false); 

        }
        
        navigate("/room")
    }

    
  return (

    <div className='login d-flex justify-content-center align-items-center vh-100 '>
        <div className='form-container p-5 rounded bg-white border border-4 border-gray'> 
        
        <form onSubmit={handlesubmit}>
            <h3 className='text-center mb-4'>Login</h3>
            <div className='mb-3'>
                <input 
                className='form-control' 
                type='email' 
                name='email'
                value={emailLog}
                onChange={(e) => setEmailLog(e.target.value)}
                placeholder='Email'
                
                />
            </div>
            <div className='mb-3'>
                <input className='form-control'
                type='password' 
                name="Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)} 
                placeholder='Password'/>
            </div>
            <div className='mb-3'>
                <input className='custom-control' type='checkbox' id='check'/>
                <label htmlFor='check' className='custom-input-label ms-2'>Remove Me</label>
            </div>
            <div className='d-grid  mb-3'>
                <button className='btn btn-primary' onClick={handlesubmit}>Login</button>
            </div>
            <p className='text-right mb-3 gap-1'>
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
            
        </form>
        </div>
    </div>
       
  )
}

export default Login