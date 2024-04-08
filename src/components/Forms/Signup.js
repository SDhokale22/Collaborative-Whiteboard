import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [flag, setFlag] = useState(true);
    const [login, setLogin] = useState("");

    

    const handleSubmit = (name, email, password) => {
        if(!name || !email || !password){
            setFlag(true);
        }else{
            setFlag(false);
            localStorage.setItem("Email",JSON.stringify(email))
            localStorage.setItem("Password",JSON.stringify(password))
            console.log("saved");
            setLogin(!login);
            
        }
        
    }

    function handleClick() {
        setLogin(!login);
      }

  return (    
    <div className='signup d-flex justify-content-center align-items-center vh-100'>
        <div className='form-container p-5 rounded bg-white border border-4 border-gray'> 
        <form onSubmit={handleSubmit}>
            <h3 className='text-center mb-4 '>Create your Account</h3>
            <div className='mb-3'>
                <input 
                className='form-control' 
                type='text' 
                placeholder='Enter your Name'
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <input 
                className='form-control' 
                type='email' 
                value={email}
                placeholder='Enter your Email'
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <input 
                className='form-control' 
                type='password' 
                value={password}
                placeholder='Enter Password'
                onChange={(e) => setpassword(e.target.value)}
                />
            </div>
            
            <div className='d-grid mb-2'>
                <button className='btn btn-primary' onClick={handleSubmit}>Register</button>
            </div>
            <p className='text-right gap-1 mb-2'>
                <p className='' onClick={handleClick} > Altready Registerd? <Link to="/">Login</Link> </p>
            </p>
            
        </form>
         
        </div>
    </div>
)
}

export default Signup